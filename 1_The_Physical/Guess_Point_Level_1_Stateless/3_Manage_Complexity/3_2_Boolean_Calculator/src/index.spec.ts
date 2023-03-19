import { BooleanCalculator } from './index';

describe('BooleanCalculator tests', () => {
  describe('when not correct input', () => {
    it('should throw an error', () => {
      const sut = new BooleanCalculator();

      expect(() => sut.calculate('')).toThrow('Not valid input');
    });
  });
});
