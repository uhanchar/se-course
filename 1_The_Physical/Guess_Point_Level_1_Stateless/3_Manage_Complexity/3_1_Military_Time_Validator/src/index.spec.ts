import { isMilitaryTime } from './index';

describe('militaryTime validator tests', () => {
  describe('when input not correct', () => {
    it('should return false', () => {
      expect(isMilitaryTime('')).toBeFalsy();
    });
  });

  describe('when input correct', () => {
    it('should return true', () => {
      expect(isMilitaryTime('04:23 - 14:45')).toBeTruthy();
    });
  });

  describe('when time hours is not valid', () => {
    it('should return false', () => {
      expect(isMilitaryTime('19:23 - 14:45')).toBeFalsy();
    });
  });

  describe('when hours the same and minutes is not valid', () => {
    it('should return false', () => {
      expect(isMilitaryTime('14:48 - 14:45')).toBeFalsy();
    });
  });

  describe('when input with not proper time length', () => {
    it('should return false', () => {
      expect(isMilitaryTime('02029:303002 - 3929:22')).toBeFalsy();
    });
  });
});
