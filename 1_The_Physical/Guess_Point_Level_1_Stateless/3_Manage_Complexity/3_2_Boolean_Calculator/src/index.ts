export class BooleanCalculator {
  public calculate(input: string) {
    if (!input) {
      throw new Error('Not valid input');
    }

    if (input.includes('NOT')) {
      return !(input === 'TRUE');
    }

    return input === 'TRUE';
  }
}
