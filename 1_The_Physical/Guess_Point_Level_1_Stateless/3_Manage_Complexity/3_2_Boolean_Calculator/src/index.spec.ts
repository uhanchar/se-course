import { BooleanCalculator } from './index';

describe('BooleanCalculator tests', () => {
  let sut: BooleanCalculator;

  beforeEach(() => {
    sut = new BooleanCalculator();
  });

  describe('when not correct input', () => {
    it('should throw an error', () => {
      expect(() => sut.calculate('')).toThrow('Not valid input');
    });
  });

  describe('when single value', () => {
    describe('when TRUE', () => {
      it('should return true', () => {
        const result = sut.calculate('TRUE');

        expect(result).toBeTruthy();
      });
    });

    describe('when FALSE', () => {
      it('should return false', () => {
        const result = sut.calculate('FALSE');

        expect(result).toBeFalsy();
      });
    });

    describe('when NOT provided', () => {
      it('should return opposite value', () => {
        const result = sut.calculate('NOT FALSE');

        expect(result).toBeTruthy();
      });
    });
  });

  describe('when AND provided', () => {
    describe('when no negation (NOT) provided', () => {
      describe('when all parts TRUE', () => {
        it('should return true', () => {
          const result = sut.calculate('TRUE AND TRUE AND TRUE');

          expect(result).toBeTruthy();
        });
      });

      describe('when not all parts TRUE', () => {
        it('should return false', () => {
          const result = sut.calculate('TRUE AND TRUE AND FALSE');

          expect(result).toBeFalsy();
        });
      });

      describe('when negation (NOT) provided', () => {
        describe('when all parts TRUE with NOT in ONE', () => {
          it('should return false', () => {
            const result = sut.calculate('TRUE AND TRUE AND NOT TRUE');

            expect(result).toBeFalsy();
          });
        });
      });
    });
  });
});
