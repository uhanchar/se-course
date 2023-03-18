import { fizzBuzz } from './fizzbuzz';

describe('fizzbuzz tests', () => {
  describe('when number is multiple of 3', () => {
    it("should return 'Fizz'", () => {
      expect(fizzBuzz(6)).toBe('Fizz');
    });
  });

  describe('when number is multiple of 5', () => {
    it("should return 'Buzz'", () => {
      expect(fizzBuzz(25)).toBe('Buzz');
    });
  });

  describe('when number is multiple of 3 and 5', () => {
    it("should return 'FizzBuzz'", () => {
      expect(fizzBuzz(15)).toBe('FizzBuzz');
    });
  });
});
