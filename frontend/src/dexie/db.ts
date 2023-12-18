import Dexie from 'dexie';
import { User } from '../types/Users';
import {
  Activity,
  ActivityProgress,
  Badge,
  NewActivity,
  NewBadge,
} from '../types/Progress';
import { solveActivityScore } from '../utils/activityProgress';
import { userID } from '../firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

export class IndexedDB extends Dexie {
  users!: Dexie.Table<User, string>;
  activities!: Dexie.Table<Activity, string>;
  userActivityProgresses!: Dexie.Table<ActivityProgress, string>;
  badges!: Dexie.Table<Badge, string>;

  constructor() {
    super('IndexedDB');

    this.version(5).stores({
      users: 'id, name, birthdate, gender, coins, score',
      activities:
        'id, userId, title, reward, setting, level, difficulty, completed',
      userActivityProgresses:
        'id, userId, activityId, duration, attempt, decomposition, pattern',
      badges: 'id, userId, name, url, description',
    });
  }
}

export const dexie_db = new IndexedDB();

export const addLocalActivity = async (activity: NewActivity) => {
  return new Promise<string>((resolve, reject) => {
    const newActivity = { ...activity, id: uuidv4() };
    dexie_db.activities
      .add(newActivity)
      .then(resolve)
      .catch((error) => {
        reject(error);
      });
  });
};

export const upsertLocalUser = async (user: User) => {
  return new Promise<string>((resolve, reject) => {
    console.log('user');
    addLocalUser(user)
      .then((e) => {
        console.log(e, 'added');
        resolve(user.id);
      })
      .catch((error) => {
        if (error.name === 'ConstraintError') {
          dexie_db.users
            .where('id')
            .equals(user.id)
            .modify((localUser) => {
              localUser.score = user.score;
              localUser.coins = user.coins;
            })
            .then(() => resolve(user.id))
            .catch(reject);
        } else {
          reject(error);
        }
      });
  });
};

export const clearLocalUserActivities = (userId: string) =>
  dexie_db.activities.where('userId').equals(userId).delete();

export const clearLocalUserActivitiesProgress = (userId: string) =>
  dexie_db.userActivityProgresses.where('userId').equals(userId).delete();

export const clearLocalUserBadge = (userId: string) =>
  dexie_db.badges.where('userId').equals(userId).delete();

export const bulkAddLocalBadges = (badges: Badge[]) =>
  dexie_db.badges.bulkAdd(badges);

export const bulkAddLocalActivities = (activities: Activity[]) =>
  dexie_db.activities.bulkAdd(activities);

export const bulkAddLocalActivityProgresses = (
  activityProgresses: ActivityProgress[]
) => dexie_db.userActivityProgresses.bulkAdd(activityProgresses);

export const addLocalActivityProgress = (
  user: string,
  activity: NewActivity,
  duration: number,
  attempt: number,
  decompScore: number,
  patternScore: number
): Promise<number> => {
  return new Promise<number>((resolve, reject) => {
    addLocalActivity(activity).then((res) => {
      const actId = res;

      const score = solveActivityScore(
        attempt,
        duration,
        decompScore,
        patternScore
      );

      updateLocalUserScore(user, score);

      const dataProgress = {
        id: uuidv4(),
        userId: user,
        activityId: actId,
        duration: duration,
        attempt: attempt,
        decomposition: decompScore,
        pattern: patternScore,
      };

      dexie_db.userActivityProgresses
        .add(dataProgress)
        .then(() => {
          resolve(score);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

export const addLocalBadge = (badge: NewBadge): Promise<Badge> => {
  return new Promise<Badge>((resolve, reject) => {
    const newBadge = { ...badge, id: uuidv4() };
    dexie_db.badges
      .add(newBadge)
      .then(() => {
        resolve(newBadge);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getLocalBadges = (): Promise<Badge[]> => {
  return new Promise<Badge[]>((resolve, reject) => {
    const collection = dexie_db.badges.where('userId').equals(userID());
    collection
      .toArray()
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const addLocalUser = (user: User): Promise<User> => {
  return dexie_db.users.get(user.id || '').then((existingUser) => {
    return new Promise<User>((resolve, reject) => {
      if (!existingUser) {
        dexie_db.users
          .add(user)
          .then(() => {
            resolve(user);
          })
          .catch((error) => {
            reject(error);
          });
      } else {
        reject({ name: 'ConstraintError' });
      }
    });
  });
};

export const getLocalActivityProgresses = (): Promise<ActivityProgress[]> => {
  return new Promise<ActivityProgress[]>((resolve, reject) => {
    const collection = dexie_db.userActivityProgresses
      .where('userId')
      .equals(userID());
    collection
      .toArray()
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getLocalActivities = (): Promise<Activity[]> => {
  return new Promise<Activity[]>((resolve, reject) => {
    const collection = dexie_db.activities.where('userId').equals(userID());
    // console.log(userID(), 'activities');
    collection
      .toArray()
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getLocalUser = (id: string): Promise<User | undefined> => {
  return new Promise<User | undefined>((resolve, reject) => {
    dexie_db.users
      .get(id)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const updateLocalUserScore = (
  id: string,
  score: number
): Promise<string> => {
  return new Promise((resolve, reject) => {
    dexie_db.users
      .where('id')
      .equals(id)
      .modify((user) => {
        user.score = user.score + score;
      })
      .then(() => {
        resolve(id);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const updateLocalUserCoins = (
  id: string,
  coins: number
): Promise<number> => {
  return new Promise<number>((resolve, reject) => {
    let totalCoins = 0;
    dexie_db.users
      .where('id')
      .equals(id)
      .modify((user) => {
        user.coins = user.coins + coins;
        totalCoins = user.coins;
      })
      .then(() => {
        resolve(totalCoins);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getLocalActivity = (id: string): Promise<Activity | undefined> => {
  return new Promise<Activity | undefined>((resolve, reject) => {
    dexie_db.activities
      .get(id)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const updateLocalActivityProgress = (
  userID: string,
  decompScore: number,
  attempt: number,
  patternScore: number,
  duration: number,
  activityNum: number,
  settingNum: number
): Promise<number> => {
  return new Promise<number>((resolve, reject) => {
    const score = solveActivityScore(
      attempt,
      duration,
      decompScore,
      patternScore
    );

    const matchActivity = dexie_db.activities
      .where('level')
      .equals(activityNum)
      .and((level) => level.setting === settingNum);
    matchActivity
      .first()
      .then((activity) => {
        if (!activity) {
          throw new Error('No matching activity found.');
        }

        const x = dexie_db.userActivityProgresses;
        return x
          .where('activityId')
          .equals(activity.id ?? 1)
          .modify((progress) => {
            progress.attempt = attempt;
            progress.duration = duration;
            progress.decomposition = decompScore;
            progress.pattern = patternScore;
          });
      })
      .then(() => {
        resolve(score);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
