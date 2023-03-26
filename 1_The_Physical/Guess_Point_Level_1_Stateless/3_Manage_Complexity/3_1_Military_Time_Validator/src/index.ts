const getTime = (input: string, separator: string): string[] => {
  return input.split(separator);
};

const isTimeCorrect = (time: string[]): boolean => {
  const [hours, minutes] = time;

  return +hours <= 23 && +minutes <= 59;
};

export const isMilitaryTime = (input: string): boolean => {
  if (!input) {
    return false;
  }

  const [startTime, endTime] = getTime(input, ' - ');

  if (!startTime?.length || !endTime?.length) {
    return false;
  }

  const startTimeParsed = getTime(startTime, ':');
  const endTimeParsed = getTime(endTime, ':');

  if (startTimeParsed?.length !== 2 ||endTimeParsed?.length !== 2) {
    return false;
  }

  const isStartTimeCorrect = isTimeCorrect(startTimeParsed);
  const isEndTimeCorrect = isTimeCorrect(endTimeParsed);

  return isStartTimeCorrect && isEndTimeCorrect;
};
