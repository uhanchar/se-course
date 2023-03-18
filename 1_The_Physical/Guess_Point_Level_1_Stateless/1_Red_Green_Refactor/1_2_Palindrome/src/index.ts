export function isPalindrome(input: string): boolean {
  return input.toLowerCase().replace(/ /g, '').split('').reverse().join('') === input.replace(/ /g, '').toLowerCase();
}
