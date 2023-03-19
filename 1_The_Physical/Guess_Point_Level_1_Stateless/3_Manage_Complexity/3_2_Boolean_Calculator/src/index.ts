export class BooleanCalculator {
  public calculate(input: string) {
    if (!input) {
      throw new Error('Not valid input');
    }

    return this.transformValuesToExpression(this.parseInput(input));
  }

  private parseInput(input: string) {
    return input.split(' AND ');
  }

  private transformValuesToExpression(values: string[]): boolean {
    let result = true;

    for (let i = 0; i < values.length; i++) {
      result = result && this.checkNegation(values[i]);
    }

    return result;
  }

  private checkNegation(value: string): boolean {
    return value.includes('NOT')
      ? !(value.replace('NOT ', '') === 'TRUE')
      : value === 'TRUE';
  }
}
