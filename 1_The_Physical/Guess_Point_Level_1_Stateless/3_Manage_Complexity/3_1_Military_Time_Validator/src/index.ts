const getTime = (input: string, separator: string): string[] => {
  return input.split(separator);
};

const isTimeCorrect = (time: string[]): boolean => {
  const [hours, minutes] = time;

  return +hours <= 23 && +minutes <= 59;
};

const validateTime = (startTime: string[], endTime: string[]): boolean => {
  const isHoursValid = startTime[0] <= endTime[0];
  const isMinutesValid =
    startTime[0] === endTime[0] ? startTime[1] < endTime[1] : true;

  return isHoursValid && isMinutesValid;
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
  const isHoursCorrect = startTimeParsed[0] <= endTimeParsed[0];
  const isTimeValid = validateTime(startTimeParsed, endTimeParsed);

  return isStartTimeCorrect && isEndTimeCorrect && isHoursCorrect && isTimeValid;
};
