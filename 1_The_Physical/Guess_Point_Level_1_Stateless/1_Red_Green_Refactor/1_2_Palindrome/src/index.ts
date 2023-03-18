export function isPalindrome(input: string): boolean {
  return input.toLowerCase().split('').reverse().join('') === input.toLowerCase();
}
