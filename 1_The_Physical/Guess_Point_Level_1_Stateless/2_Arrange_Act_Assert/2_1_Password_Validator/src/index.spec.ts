import { PasswordValidator } from './index';

describe('PasswordValidator tests', () => {
  let sut: PasswordValidator;

  beforeEach(() => {
    sut = new PasswordValidator();
  });

  describe('when password is between 5 and 15 characters long', () => {
    it('should return true', () => {
      const validation = sut.validate('testPass1');

      expect(validation.result).toBeTruthy();
    });

    it('should return no errors', () => {
      const validation = sut.validate('testPass1');

      expect(validation.errors.length).toBe(0);
    });

    describe('when password is has at least 1 digit', () => {
      it('should return true', () => {
        const validation = sut.validate('testPass2');

        expect(validation.result).toBeTruthy();
      });
    });

    describe('when password is has at least uppercase letter', () => {
      it('should return true', () => {
        const validation = sut.validate('testPass3');

        expect(validation.result).toBeTruthy();
      });
    });
  });
});
