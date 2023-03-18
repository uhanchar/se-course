export function fizzBuzz(input: number): string | number {
  if (input % 3 === 0) {
    return 'Fizz';
  } else {
    return 'Buzz';
  }
}
