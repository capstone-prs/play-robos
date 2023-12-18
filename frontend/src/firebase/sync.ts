import {
  bulkAddLocalActivities,
  bulkAddLocalActivityProgresses,
  bulkAddLocalBadges,
  clearLocalUserActivities,
  clearLocalUserActivitiesProgress,
  clearLocalUserBadge,
  getLocalActivities,
  getLocalActivityProgresses,
  getLocalBadges,
  getLocalUser,
  upsertLocalUser,
} from 'src/dexie/db';
import getUser, {
  addActivity,
  addActivityProgress,
  addBandge,
  addUser,
  deleteActivities,
  deleteActivityProgresses,
  deleteBadges,
  getActivities,
  getActivityProgresses,
  getBadges,
  userID,
} from './firestore';

export const pushLocalToFirebase = async () => {
  const id = userID();
  return getLocalUser(id)
    .then((user) => {
      if (user) {
        addUser({ ...user, birthdate: new Date(user.birthdate) }, id);
      }
    })
    .then(() =>
      deleteActivities(id)
        .then(getLocalActivities)
        .then((activities) => activities.forEach(addActivity))
    )
    .then(() =>
      deleteActivityProgresses(id)
        .then(getLocalActivityProgresses)
        .then((activityProgresses) =>
          activityProgresses.forEach(addActivityProgress)
        )
    )
    .then(() =>
      deleteBadges(id)
        .then(getLocalBadges)
        .then((badges) => badges.forEach(addBandge))
    );
};

export const insertFromFirebase = async () => {
  const userId = userID();
  return clearLocalUserBadge(userId)
    .then(() => clearLocalUserActivities(userId))
    .then(() => clearLocalUserActivitiesProgress(userId))
    .then(() => getUser(userId).then(upsertLocalUser))
    .then(() => getBadges(userId).then(bulkAddLocalBadges))
    .then(() => getActivities(userId).then(bulkAddLocalActivities))
    .then(() =>
      getActivityProgresses(userId).then(bulkAddLocalActivityProgresses)
    );
};
