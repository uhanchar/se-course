import { isMilitaryTime } from './index';

describe('militaryTime validator tests', () => {
  describe('when incorrect error', () => {
    describe('when not correct input', () => {
      it('should return false', () => {
        expect(isMilitaryTime('')).toBeFalsy();
      });
    });
  });
});
