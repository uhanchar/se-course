export const isMilitaryTime = (input: string): boolean => {
  if (!input) {
    return false;
  }

  const [startTime, endTime] = input.split(' - ');

  if (!startTime?.length || !endTime?.length) {
    return false;
  }

  return true;
};
