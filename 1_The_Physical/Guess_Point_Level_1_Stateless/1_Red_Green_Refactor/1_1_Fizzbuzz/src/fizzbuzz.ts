export function fizzBuzz(input: number): string | number {
  if (input % 3 === 0 && input % 5 === 0) {
    return 'FizzBuzz';
  } else if (input % 3 === 0) {
    return 'Fizz';
  } else if (input % 5 === 0) {
    return 'Buzz';
  } else {
    return input.toString();
  }
}
