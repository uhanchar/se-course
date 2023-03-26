import { isMilitaryTime } from './index';

describe('militaryTime validator tests', () => {
  describe('when input is not correct ', () => {
    it('should return false', () => {
      expect(isMilitaryTime('')).toBeFalsy();
    });
  });
});
