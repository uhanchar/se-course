export class BooleanCalculator {
  public calculate(input: string) {
    if (!input) {
      throw new Error('Not valid input');
    }

    if (input.includes('NOT')) {
      return !(input === 'TRUE');
    }

    return this.transformValuesToExpression(this.parseInput(input));
  }

  private parseInput(input: string) {
    return input.split(' AND ');
  }

  private transformValuesToExpression(values: string[]): boolean {
    let result = true;

    for (let i = 0; i < values.length; i++) {
      result = result && values[i] === 'TRUE';
    }

    return result;
  }
}
