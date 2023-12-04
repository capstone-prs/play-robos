import { ActivityProgress } from '../types/Progress';

export const initializeLocalActivityProgress = () => {
  const data = {
    coins: 100,
    score: 0,
    activityProgress: [],
  };
  if (localStorage.getItem('localData') === null) {
    localStorage.setItem('localData', JSON.stringify(data));
  }
};

export const addLocalActivityProgress = (progress: ActivityProgress) => {
  const storedDataString = localStorage.getItem('localData');
  const storedUserData = storedDataString ? JSON.parse(storedDataString) : null;

  if (storedUserData && !storedUserData.activityProgress) {
    storedUserData.activityProgress = [];
  }
  storedUserData.activityProgress.push(progress);

  localStorage.setItem('localData', JSON.stringify(storedUserData));
  solveActivityScore(
    solveAttemptScore(progress.attempt),
    solveDurationScore(progress.duration),
    progress.decomposition,
    progress.decomposition
  );
};

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

  if (attempt === 1) {
    return maxScore;
  } else {
    const deduction = (attempt - 1) * deductionRate;

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
