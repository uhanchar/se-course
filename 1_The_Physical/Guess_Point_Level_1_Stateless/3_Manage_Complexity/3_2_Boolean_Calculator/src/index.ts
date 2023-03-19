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
    return values.reduce(
      (expression, value) => expression && this.checkNegation(value),
      true,
    );
  }

  private checkNegation(value: string): boolean {
    return value.includes('NOT')
      ? !(value.replace('NOT ', '') === 'TRUE')
      : value === 'TRUE';
  }
}
