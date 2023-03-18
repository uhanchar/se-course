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
  });
})
