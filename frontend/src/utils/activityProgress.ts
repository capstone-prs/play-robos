import { addLocalBadge, getLocalBadges, getLocalUser } from '../dexie/db';
import { userID } from '../firebase/firestore';
import { Activity, Badge } from '../types/Progress';

export const localActivityProgress = (
  userId: string,
  activity: Activity,
  duration: number,
  attempt: number,
  decomp: number,
  pattern: number
) => {
  const inputProgress = {
    userId: userId,
    activity: activity,
    duration: duration,
    attempt: attempt,
    decomposition: decomp,
    pattern: pattern,
  };
  return inputProgress;
};

export const solveDurationScore = (duration: number) => {
  const maxScore = 100;
  const timeThreshold = 40;
  const deductionRate = 10;

  let durationScore = 0;

  if (duration < timeThreshold) {
    durationScore = maxScore;
    return durationScore;
  } else {
    const excessTime = duration - timeThreshold;
    const deduction = Math.floor(excessTime / 120) * deductionRate;

    durationScore = Math.max(maxScore - deduction, 0);
    return durationScore;
  }
};

export const solveAttemptScore = (attempt: number) => {
  const maxScore = 100;
  const deductionRate = 5;

  if (attempt === 0) {
    return maxScore;
  } else {
    const deduction = attempt * deductionRate;

    return Math.max(maxScore - deduction, 0);
  }
};

export const solveActivityScore = (
  attemptScore: number,
  durationScore: number,
  patternScore: number,
  decompScore: number
) => {
  const attemptWeight = 25;
  const durationWeight = 15;
  const patternWeight = 30;
  const decompWeight = 30;

  const weightedSum =
    solveAttemptScore(attemptScore) * (attemptWeight / 100) +
    solveDurationScore(durationScore) * (durationWeight / 100) +
    patternScore * (patternWeight / 100) +
    decompScore * (decompWeight / 100);

  const total = Math.max(0, Math.min(100, weightedSum));

  return total;
};

export const badgeReward = async () => {
  const currentUser = await getLocalUser(userID());
  const currentScore = currentUser?.score ?? 0;

  switch (true) {
    case currentScore >= 100 && currentScore < 300:
      return {
        badgeName: 'Novice Explorer',
        badgeUrl: '../novice-explorer.svg',
        description:
          'Congratulations! You have earned the Novice Explorer badge for scoring between 100 and 299. Your cosmic journey has just begun!',
      };

    case currentScore >= 300 && currentScore < 500:
      return {
        badgeName: 'Galactic Adventurer',
        badgeUrl: '../galactic-adventurer.svg',
        description:
          'You are now a Galactic Adventurer, having achieved a score of 300 to 499. Navigate the galaxy with confidence and explore new frontiers!',
      };

    case currentScore >= 500 && currentScore < 800:
      return {
        badgeName: 'Celestial Guardian',
        badgeUrl: '../celestial-guardian.svg',
        description:
          'Well done! You have become a Celestial Guardian, with a remarkable score between 500 and 799. Embrace your role as a protector of celestial wonders.',
      };

    case currentScore >= 800 && currentScore < 1100:
      return {
        badgeName: 'Cosmic Protector',
        badgeUrl: '../cosmic-protector.svg',
        description:
          'Bravo! Achieve the title of Cosmic Protector by scoring 800 to 1099. Your commitment to safeguarding the cosmic realms is truly commendable.',
      };

    case currentScore >= 1100 && currentScore < 1500:
      return {
        badgeName: 'Starlight Sentinel',
        badgeUrl: '../starlight-sentinel.svg',
        description:
          'Shine bright as a Starlight Sentinel! Your score of 1100 to 1499 illuminates the cosmos, marking you as a guiding force in the universe.',
      };

    case currentScore >= 1500 && currentScore < 2000:
      return {
        badgeName: 'Intergalactic Sentinel',
        badgeUrl: '../intergalactic-sentinel.svg',
        description:
          'Stellar achievement! As an Intergalactic Sentinel with a score of 1500 to 1999, you stand as a beacon of wisdom in the vast interstellar expanse.',
      };

    case currentScore >= 2000 && currentScore < 2500:
      return {
        badgeName: 'Universal Guardian',
        badgeUrl: '../universal-guardian.svg',
        description:
          'You have reached the status of Universal Guardian with a score of 2000 to 2499. Your dedication ensures balance and harmony across the universe.',
      };

    case currentScore >= 2500 && currentScore <= 3000:
      return {
        badgeName: 'Master of the Cosmos',
        badgeUrl: '../master.svg',
        description:
          'Phenomenal accomplishment! As the Master of the Cosmos with a score of 2500 to 3000, you have mastered cosmic challenges like no other. Congratulations!',
      };

    default:
      return {
        badgeName: '',
        badgeUrl: '',
        description: '',
      };
  }
};

export const launchBadgeReward = async () => {
  const allBadges = await getLocalBadges();
  const badgeRew = await badgeReward();

  const determinant = allBadges.find(
    (badge: Badge) => badge.name === badgeRew.badgeName
  );

  if (
    determinant === undefined &&
    badgeRew.badgeName != '' &&
    badgeRew.badgeUrl != ''
  ) {
    addLocalBadge({
      name: badgeRew.badgeName,
      url: badgeRew.badgeUrl,
      description: badgeRew.description,
      userId: userID(),
    });

    return {
      badgeName: badgeRew.badgeName,
      badgeUrl: badgeRew.badgeUrl,
      description: badgeRew.description,
    };
  } else {
    return {
      badgeName: '',
      badgeUrl: '',
      description: badgeRew.description,
    };
  }
};
