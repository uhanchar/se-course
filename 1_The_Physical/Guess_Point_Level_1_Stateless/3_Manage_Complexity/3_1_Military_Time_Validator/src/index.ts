const getTime = (input: string, separator: string): string[] => {
  return input.split(separator);
};

const isTimeCorrect = (time: string[]): boolean => {
  const [hours, minutes] = time;

  return +hours < 24 && +minutes < 59;
};

const isTimeValid = (startValue: string, endValue: string): boolean => {
  return startValue < endValue;
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

  const isStartTimeCorrect = isTimeCorrect(startTimeParsed);
  const isEndTimeCorrect = isTimeCorrect(endTimeParsed);
  const isHoursCorrect = isTimeValid(startTimeParsed[0], endTimeParsed[0]);

  return isStartTimeCorrect && isEndTimeCorrect && isHoursCorrect;
};
