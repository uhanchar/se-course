export const isMilitaryTime = (input: string): boolean => {
  const [startTime, endTime] = input.split(' - ');

  if (!startTime?.length && !endTime?.length) {
    return false;
  }

  const startTimeParsed = startTime.split(':');
  const endTimeParsed = endTime.split(':');

  if (!startTimeParsed?.length && !endTimeParsed?.length) {
    return false;
  }

  const isStartTimeValid = +startTimeParsed[0] < 24 && +startTimeParsed[1] < 60;
  const isEndTimeValid = +endTimeParsed[0] < 24 && +endTimeParsed[1] < 60;

  return isStartTimeValid && isEndTimeValid;
};
