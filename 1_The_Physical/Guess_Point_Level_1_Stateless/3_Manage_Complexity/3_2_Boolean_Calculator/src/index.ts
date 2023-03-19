export class BooleanCalculator {
  public calculate(input: string) {
    if (!input) {
      throw new Error('Not valid input');
    }

    if (input.includes('NOT')) {
      return !(input === 'TRUE');
    }

    let result = true;
    const values = input.split(' AND ');

    for (let i = 0; i < values.length; i++) {
      result = result && values[i] === 'TRUE';
    }

    return result;
  }
}
