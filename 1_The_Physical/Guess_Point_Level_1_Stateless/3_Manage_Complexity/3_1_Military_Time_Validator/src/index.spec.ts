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

      describe('when start time or end time are in incorrect format', () => {
        it('should return false', () => {
          expect(isMilitaryTime('13- 14')).toBeFalsy();
        });
      });

      describe('when start time or end time hours are out of range', () => {
        it('should return false', () => {
          expect(isMilitaryTime('13:46 - 34:45')).toBeFalsy();
        });
      });

      describe('when start time or end time minutes are out of range', () => {
        it('should return false', () => {
          expect(isMilitaryTime('13:87 - 12:45')).toBeFalsy();
        });
      });

      describe('when start time hours are later than end time hours', () => {
        it('should return false', () => {
          expect(isMilitaryTime('19:23 - 14:45')).toBeFalsy();
        });
      });

      describe('when hours are the same and start time minutes are later than end time minutes', () => {
        it('should return false', () => {
          expect(isMilitaryTime('14:48 - 14:45')).toBeFalsy();
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
