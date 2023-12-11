import {
  Activity,
  ActivityProgress,
  Badge,
  Difficulty,
} from '../types/Progress';

export const localActivityProgress = (
  activity: Activity,
  duration: number,
  attempt: number,
  decomp: number,
  pattern: number
) => {
  const inputProgress: ActivityProgress = {
    activity: activity,
    duration: solveDurationScore(duration),
    attempt: solveAttemptScore(attempt),
    decomposition: decomp,
    pattern: pattern,
  };
  return inputProgress;
};

export const localActivity = (
  id: number,
  title: string,
  reward: number,
  setting: number,
  difficulty: Difficulty
) => {
  const inputActivity: Activity = {
    id: id,
    title: title,
    reward: reward,
    setting: setting,
    difficulty: difficulty,
  };
  return inputActivity;
};

// export const initializeLocalActivityProgress = () => {
//   const data = {
//     coins: 100,
//     score: 0,
//     activityProgress: [],
//     badgesReceived: [],
//   };
//   if (localStorage.getItem('localData') === null) {
//     localStorage.setItem('localData', JSON.stringify(data));
//   }
// };

// export const addLocalActivityProgress = (progress: ActivityProgress) => {
//   const storedDataString = localStorage.getItem('localData');
//   const storedUserData = storedDataString ? JSON.parse(storedDataString) : null;

//   if (storedUserData && !storedUserData.activityProgress) {
//     storedUserData.activityProgress = [];
//   }
//   storedUserData.activityProgress.push(progress);

//   localStorage.setItem('localData', JSON.stringify(storedUserData));
//   return solveActivityScore(
//     solveAttemptScore(progress.attempt),
//     solveDurationScore(progress.duration),
//     progress.decomposition,
//     progress.decomposition
//   );
// };

export const solveDurationScore = (duration: number) => {
  const maxScore = 100;
  const timeThreshold = 60;
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
  console.log(attemptScore);
  console.log(durationScore);
  console.log(patternScore);
  console.log(decompScore);

  const attemptWeight = 25;
  const durationWeight = 15;
  const patternWeight = 30;
  const decompWeight = 30;

  const weightedSum =
    attemptScore * (attemptWeight / 100) +
    durationScore * (durationWeight / 100) +
    patternScore * (patternWeight / 100) +
    decompScore * (decompWeight / 100);

  const total = Math.max(0, Math.min(100, weightedSum));

  addLocalScore(total);
  return total;
};

export const addLocalScore = (score: number) => {
  const storedDataString = localStorage.getItem('localData');
  const storedUserData = storedDataString ? JSON.parse(storedDataString) : null;

  storedUserData.score += score;
  localStorage.setItem('localData', JSON.stringify(storedUserData));
};

export const badgeReward = () => {
  const storedDataString = localStorage.getItem('localData');
  const storedUserData = storedDataString ? JSON.parse(storedDataString) : null;

  const currentScore = storedUserData.score;

  console.log(currentScore);
  switch (true) {
    case currentScore >= 100 && currentScore < 300:
      return {
        badgeName: 'Novice Explorer',
        badgeUrl: '../novice-explorer.svg',
      };

    case currentScore >= 300 && currentScore < 500:
      return {
        badgeName: 'Galactic Adventurer',
        badgeUrl: '../galactic-adventurer.svg',
      };

    case currentScore >= 500 && currentScore < 800:
      return {
        badgeName: 'Celestial Guardian',
        badgeUrl: '../celestial-guardian.svg',
      };

    case currentScore >= 800 && currentScore < 1100:
      return {
        badgeName: 'Cosmic Protector',
        badgeUrl: '../cosmic-protector.svg',
      };

    case currentScore >= 1100 && currentScore < 1500:
      return {
        badgeName: 'Starlight Sentinel',
        badgeUrl: '../starlight-sentinel.svg',
      };

    case currentScore >= 1500 && currentScore < 2000:
      return {
        badgeName: 'Intergalactic Sentinel',
        badgeUrl: '../intergalactic-sentinel.svg',
      };

    case currentScore >= 2000 && currentScore < 2500:
      return {
        badgeName: 'Universal Guardian',
        badgeUrl: '../universal-guardian.svg',
      };

    case currentScore >= 2500 && currentScore <= 3000:
      return {
        badgeName: 'Master of the Cosmos',
        badgeUrl: '../master.svg',
      };

    default:
      return {
        badgeName: '',
        badgeUrl: '',
      };
  }
};

export const launchBadgeReward = () => {
  const storedDataString = localStorage.getItem('localData');
  const storedUserData = storedDataString ? JSON.parse(storedDataString) : null;

  if (storedUserData && !storedUserData.badgesReceived) {
    storedUserData.badgesReceived = [];
  }

  const determinant = storedUserData.badgesReceived.find(
    (badge: Badge) => badge.name === badgeReward().badgeName
  );

  if (determinant === undefined) {
    const reward = badgeReward();
    const newElement = {
      badgeName: reward.badgeName,
      badgeUrl: reward.badgeUrl,
    };
    if (reward.badgeName != '' && reward.badgeUrl != '') {
    }
    storedUserData.badgesReceived.push(newElement);
    localStorage.setItem('localData', JSON.stringify(storedUserData));
    return {
      visible: true,
      name: newElement.badgeName,
      url: newElement.badgeUrl,
    };
  } else {
    return {
      visible: false,
    };
  }
};
