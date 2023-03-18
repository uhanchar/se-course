import { PasswordValidator } from './index';

describe('PasswordValidator tests', () => {
  describe('when password correct', () => {
    describe('when password is between 5 and 15 characters long', () => {
      it('should return true', () => {
        const sut = new PasswordValidator();

        const result = sut.validate('testPass1');

        expect(result).toBeTruthy();
      });
    });
  });
});
