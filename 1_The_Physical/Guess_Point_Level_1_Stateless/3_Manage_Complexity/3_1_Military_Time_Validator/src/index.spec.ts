import { isMilitaryTime } from './index';

describe('militaryTime validator tests', () => {
  describe('when input is empty ', () => {
    it('should return false', () => {
      expect(isMilitaryTime('')).toBeFalsy();
    });

    describe('when input format is not correct', () => {
      describe('when start time or end time are empty', () => {
        it('should return false', () => {
          expect(isMilitaryTime('- 14:45')).toBeFalsy();
        });
      });
    });
  });

  describe('when input is correct', () => {
    it('should return true', () => {
      expect(isMilitaryTime('04:23 - 14:45')).toBeTruthy();
    });
  });
});
