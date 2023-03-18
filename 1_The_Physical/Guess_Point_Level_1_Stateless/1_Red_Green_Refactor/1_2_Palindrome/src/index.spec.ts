import { isPalindrome } from './index';

describe('palindrome checker tests', () => {
  describe('when palindrome', () => {
    it('should return true', () => {
      expect(isPalindrome('bob')).toBeTruthy();
    });

    describe('when input with different letter case', () => {
      it('should return true', () => {
        expect(isPalindrome('Bob')).toBeTruthy();
      });
    });

    describe('when input with different blank spaces', () => {
      it('should return true', () => {
        expect(isPalindrome('Never Odd or Even')).toBeTruthy();
      });
    });
  });

  describe('when is not palindrome', () => {
    it('should return false', () => {
      expect(isPalindrome('bill')).toBeFalsy();
    });
  });
})
