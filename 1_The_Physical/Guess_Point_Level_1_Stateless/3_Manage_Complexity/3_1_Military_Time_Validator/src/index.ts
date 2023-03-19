const getTime = (input: string, separator: string): string[] => {
  return input.split(separator);
};

const isTimeValid = (time: string[]): boolean => {
  const [hours, minutes] = time;

  return +hours < 24 && +minutes < 59;
};

export const isMilitaryTime = (input: string): boolean => {
  const [startTime, endTime] = getTime(input, ' - ');

  if (!startTime?.length && !endTime?.length) {
    return false;
  }

  const startTimeParsed = getTime(startTime, ':');
  const endTimeParsed = getTime(endTime, ':');

  if (!startTimeParsed?.length && !endTimeParsed?.length) {
    return false;
  }

  const isStartTimeValid = isTimeValid(startTimeParsed);
  const isEndTimeValid = isTimeValid(endTimeParsed);

  return isStartTimeValid && isEndTimeValid;
};
