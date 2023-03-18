import { fizzBuzz } from './fizzbuzz';

describe('fizzbuzz tests', () => {
  describe('when number is multiple of 3', () => {
    it("should return 'fizz'", () => {
      expect(fizzBuzz(6)).toBe('Fizz');
    });
  });
});
