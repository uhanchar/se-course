import { PasswordValidator } from './index';

describe('PasswordValidator tests', () => {
  let sut: PasswordValidator;

  beforeEach(() => {
    sut = new PasswordValidator();
  });

  describe('when password correct', () => {
    describe('when password is between 5 and 15 characters long', () => {
      it('should return true', () => {
        const result = sut.validate('testPass1');

        expect(result).toBeTruthy();
      });
    });

    describe('when password is has at least 1 digit', () => {
      it('should return true', () => {
        const result = sut.validate('testPass2');

        expect(result).toBeTruthy();
      });
    });

    describe('when password is has at least uppercase letter', () => {
      it('should return true', () => {
        const result = sut.validate('testPass3');

        expect(result).toBeTruthy();
      });
    });
  });
});
