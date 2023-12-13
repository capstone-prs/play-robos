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

export const addLocalActivityProgress = async (
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
      console.log(activity);

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

export const addLocalBadge = async (badge: Badge): Promise<Badge> => {
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

export const getLocalBadges = async (): Promise<Badge[]> => {
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

export const addLocalUser = async (user: User): Promise<User> => {
  const existingUser = await dexie_db.users.get(user.id || '');

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
};

export const getLocalActivityProgress = async (): Promise<
  ActivityProgress[]
> => {
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

export const getLocalActivities = async (): Promise<Activity[]> => {
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

export const getLocalUser = async (id: string): Promise<User | undefined> => {
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

export const updateLocalUserScore = async (
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
