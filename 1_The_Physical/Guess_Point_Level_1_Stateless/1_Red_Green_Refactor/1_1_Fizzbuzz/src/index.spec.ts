import { fizzBuzz } from './fizzbuzz';

describe('fizzbuzz tests', () => {
  describe('when number is not valid', () => {
    describe('when number is less than 1', () => {
      it("should throw an error", () => {
        expect(() => fizzBuzz(-1)).toThrow('Input is less than 1');
      });
    });
  });

  describe('when number is valid', () => {
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

    describe('when number is not multiple of 3 or 5', () => {
      it('should return number', () => {
        expect(fizzBuzz(16)).toBe('16');
      });
    });
  });
});
