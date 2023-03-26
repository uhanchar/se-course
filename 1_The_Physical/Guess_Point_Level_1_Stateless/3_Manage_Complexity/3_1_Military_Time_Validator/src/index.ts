export const isMilitaryTime = (input: string): boolean => {
  if (!input) {
    return false;
  }

  const [startTime, endTime] = input.split(' - ');

  if (!startTime?.length || !endTime?.length) {
    return false;
  }

  const startTimeParsed = startTime.split(':');
  const endTimeParsed = endTime.split(':');

  if (startTimeParsed?.length !== 2 ||endTimeParsed?.length !== 2) {
    return false;
  }

  return +startTimeParsed[0] <= 24 && +endTimeParsed[0] <= 24;
};
