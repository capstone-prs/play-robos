import {
  getDoc,
  doc,
  setDoc,
  where,
  collection,
  query,
  getDocs,
  deleteDoc,
} from 'firebase/firestore';
import { db } from '../boot/firebase';
import { NewUser, User } from '../types/Users';
import { getAuth } from 'firebase/auth';
import { Activity, Badge, ActivityProgress } from 'src/types/Progress';

const auth = getAuth();

export const addUser = (data: NewUser, id: string) =>
  setDoc(doc(db, 'users', id), {
    ...data,
    id: id,
  });

export const getUser = (id: string) =>
  getDoc(doc(db, 'users', id)).then((snap) => {
    if (snap.exists()) {
      return {
        ...snap.data(),
        birthdate: snap.data().birthdate.toDate(),
      } as User;
    } else {
      throw new Error('user not found');
    }
  });

export const userID = (): string => {
  return auth.currentUser ? auth.currentUser.uid : '0'; // FIXME:
};

export const addActivity = (data: Activity) =>
  setDoc(doc(db, 'activities', data.id), data);

export const getActivities = (userID: string) =>
  getDocs(
    query(collection(db, 'activities'), where('userId', '==', userID))
  ).then((snap) =>
    snap.docs.map((snap) => {
      if (snap.exists()) {
        return snap.data() as Activity;
      } else {
        throw new Error('no activities found');
      }
    })
  );

export const addBandge = (data: Badge) =>
  setDoc(doc(db, 'badges', data.id), data);

export const getBadges = (userID: string) =>
  getDocs(query(collection(db, 'badges'), where('userId', '==', userID))).then(
    (snap) =>
      snap.docs.map((snap) => {
        if (snap.exists()) {
          return snap.data() as Badge;
        } else {
          throw new Error('no badges found');
        }
      })
  );

export const addActivityProgress = (data: ActivityProgress) =>
  setDoc(doc(db, 'activity_progresses', data.id), data);

export const getActivityProgresses = (userID: string) =>
  getDocs(
    query(collection(db, 'activity_progresses'), where('userId', '==', userID))
  ).then((snap) =>
    snap.docs.map((snap) => {
      if (snap.exists()) {
        return snap.data() as ActivityProgress;
      } else {
        throw new Error('no activity progresses found');
      }
    })
  );

export const deleteActivityProgresses = (userID: string) =>
  getDocs(
    query(collection(db, 'activity_progresses'), where('userId', '==', userID))
  ).then((snap) =>
    Promise.all(
      snap.docs.map((snap) => {
        if (snap.exists()) {
          const activityProgress = snap.data() as ActivityProgress;

          return deleteDoc(
            doc(db, 'activity_progresses', activityProgress.id)
          ).then(() => activityProgress);
        } else {
          throw new Error('no activity progresses found');
        }
      })
    )
  );

export const deleteActivities = (userID: string) =>
  getDocs(
    query(collection(db, 'activities'), where('userId', '==', userID))
  ).then((snap) =>
    Promise.all(
      snap.docs.map((snap) => {
        if (snap.exists()) {
          const activity = snap.data() as Activity;

          return deleteDoc(doc(db, 'activities', activity.id)).then(
            () => activity
          );
        } else {
          throw new Error('no activities found');
        }
      })
    )
  );

export const deleteBadges = (userID: string) =>
  getDocs(query(collection(db, 'badges'), where('userId', '==', userID))).then(
    (snap) =>
      Promise.all(
        snap.docs.map((snap) => {
          if (snap.exists()) {
            const badge = snap.data() as Badge;

            return deleteDoc(doc(db, 'badge', badge.id)).then(() => badge);
          } else {
            throw new Error('no badges found');
          }
        })
      )
  );
export default getUser;
