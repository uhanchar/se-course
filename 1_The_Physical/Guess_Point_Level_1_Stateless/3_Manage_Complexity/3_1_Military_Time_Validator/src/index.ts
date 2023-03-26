export const isMilitaryTime = (input: string): boolean => {
  if (!input) {
    return false;
  }

  const [startTime, endTime] = input.split(' - ');

  if (!startTime?.length || !endTime?.length) {
    return false;
  }

  if (startTime.split(':')?.length !== 2 || endTime.split(':')?.length !== 2) {
    return false;
  }

  return +startTime.split(':')[0] <= 24 && +endTime.split(':')[0] <= 24;
};
