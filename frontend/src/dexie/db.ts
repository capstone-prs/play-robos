import Dexie from 'dexie';
import { User } from '../types/Users';
import { Activity, ActivityProgress, Badge } from '../types/Progress';

export class IndexedDB extends Dexie {
  users!: Dexie.Table<User, string>;
  activities!: Dexie.Table<Activity, number>;
  userActivityProgresses!: Dexie.Table<ActivityProgress, number>;
  badges!: Dexie.Table<Badge, number>;

  constructor() {
    super('IndexedDB');

    this.version(1).stores({
      users: 'id, name, birthdate, gender, coins, score',
      activities: 'id, setting, difficulty',
      userActivityProgresses:
        '++id, activity, duration, attempt, decomposition, pattern, completed',
      badges: '++id, name, url, criterion, description',
    });
  }
}

export const dexie_db = new IndexedDB();

export const addLocalActivityProgress = async (
  progress: ActivityProgress
): Promise<ActivityProgress> => {
  return new Promise<ActivityProgress>((resolve, reject) => {
    dexie_db.userActivityProgresses
      .add(progress)
      .then(() => {
        resolve(progress);
      })
      .catch((error) => {
        reject(error);
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
