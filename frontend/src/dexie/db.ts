import Dexie from 'dexie';
import { User } from '../types/Users';
import { Activity, ActivityProgress, Badge } from '../types/Progress';
import { solveActivityScore } from '../utils/activityProgress';

export class IndexedDB extends Dexie {
  users!: Dexie.Table<User, string>;
  activities!: Dexie.Table<Activity, number>;
  userActivityProgresses!: Dexie.Table<ActivityProgress, number>;
  badges!: Dexie.Table<Badge, number>;

  constructor() {
    super('IndexedDB');

    this.version(3).stores({
      users: 'id, name, birthdate, gender, coins, score',
      activities: '++id, title, reward, setting, level, difficulty, completed',
      userActivityProgresses:
        '++id, user, activity, duration, attempt, decomposition, pattern',
      badges: '++id, name, url, description',
    });
  }
}

export const dexie_db = new IndexedDB();

export const addLocalActivity = async (activity: Activity) => {
  return new Promise<number>((resolve, reject) => {
    dexie_db.activities
      .add(activity)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const addLocalActivityProgress = (
  user: string,
  activity: Activity,
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

export const addLocalBadge = (badge: Badge): Promise<Badge> => {
  return new Promise<Badge>((resolve, reject) => {
    dexie_db.badges
      .add(badge)
      .then(() => {
        resolve(badge);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getLocalBadges = (): Promise<Badge[]> => {
  return new Promise<Badge[]>((resolve, reject) => {
    const collection = dexie_db.badges;
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
            console.log(error.name);
            reject(error);
          });
      }
    });
  });
};

export const getLocalActivityProgress = (): Promise<ActivityProgress[]> => {
  return new Promise<ActivityProgress[]>((resolve, reject) => {
    const collection = dexie_db.userActivityProgresses;
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
    const collection = dexie_db.activities;

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

export const getLocalActivity = (id: number): Promise<Activity | undefined> => {
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

export const tryUpdate = (
  user: string,
  activityParam: Activity,
  duration: number,
  attempt: number,
  decompScore: number,
  patternScore: number
): Promise<number> => {
  return new Promise<number>((resolve, reject) => {
    const score = solveActivityScore(
      attempt,
      duration,
      decompScore,
      patternScore
    );

    getLocalActivityProgress().then((progresses) => {
      //always undefined because the progress is always not yet created
      const existingProgress = progresses.find((progress) => {
        getLocalActivity(progress.activityId).then((res) => {
          progress.activityId === res?.id;
        });
      });

      console.log(existingProgress);

      if (!existingProgress) {
        addLocalActivityProgress(
          user,
          activityParam,
          duration,
          attempt,
          decompScore,
          patternScore
        )
          .then(() => {
            resolve(score);
          })
          .catch((error) => {
            reject(error);
          });
      } else {
        updateLocalUserScore(user, score);

        dexie_db.userActivityProgresses
          .where('activityId')
          .equals(existingProgress.activityId)
          .modify((prog) => {
            prog.attempt = attempt;
            prog.duration = duration;
            prog.decomposition = decompScore;
            prog.pattern = patternScore;
          })
          .then(() => {
            resolve(score);
          })
          .catch((error) => {
            reject(error);
          });
      }
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

    const determinant = matchActivity.toArray();

    determinant
      .then((activities) => {
        updateLocalUserScore(userID, score);

        return dexie_db.userActivityProgresses
          .where('activity')
          .equals(activities[0].id ?? 0)
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
