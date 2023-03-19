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

  describe('when OR provided', () => {
    describe('when OR only', () => {
      describe('when at lease one TRUE', () => {
        it('should return true', () => {
          const result = sut.calculate('TRUE OR FALSE');

          expect(result).toBeTruthy();
        });
      });
    });

    describe('when OR and AND', () => {
      describe('when at lease one TRUE', () => {
        it('should return true', () => {
          const result = sut.calculate('TRUE OR FALSE AND TRUE');

          expect(result).toBeTruthy();
        });
      });
    });

    describe('when OR, AND and NOT', () => {
      describe('when at lease one TRUE', () => {
        it('should return true', () => {
          const result = sut.calculate('TRUE OR FALSE AND NOT TRUE');

          expect(result).toBeTruthy();
        });
      });
    });

    describe('when OR with NOT, AND and NOT', () => {
      describe('when at lease one TRUE', () => {
        it('should return true', () => {
          const result = sut.calculate('NOT TRUE OR FALSE AND TRUE');

          expect(result).toBeFalsy();
        });
      });
    });
  });

  describe('when parenthesis', () => {
    it('should return true', () => {
      const result = sut.calculate('(TRUE AND TRUE) AND NOT FALSE');

      expect(result).toBeTruthy();
    });

    it('should return false', () => {
      const result = sut.calculate('(TRUE AND FALSE) AND FALSE');

      expect(result).toBeFalsy();
    });
  });
});
