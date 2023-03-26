import { isMilitaryTime } from './index';

describe('militaryTime validator tests', () => {
  describe('when input is not correct ', () => {
    it('should return false', () => {
      expect(isMilitaryTime('')).toBeFalsy();
    });
  });

  describe('when input is correct', () => {
    it('should return true', () => {
      expect(isMilitaryTime('04:23 - 14:45')).toBeTruthy();
    });
  });
});
