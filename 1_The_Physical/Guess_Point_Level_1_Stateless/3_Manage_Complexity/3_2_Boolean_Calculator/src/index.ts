enum Operator {
  AND = 'AND',
  OR = 'OR',
  NOT = 'NOT',
}

export class BooleanCalculator {
  public calculate(input: string) {
    if (!input) {
      throw new Error('Not valid input');
    }

    const orChunks: string[] = this.parseInput(input, Operator.OR);

    return orChunks.reduce((result, chunk) => {
      return (
        result ||
        this.transformValuesToExpression(this.parseInput(chunk, Operator.AND))
      );
    }, false);
  }

  private parseInput(input: string, operator: Operator) {
    return input.split(` ${operator} `);
  }

  private transformValuesToExpression(values: string[]): boolean {
    return values.reduce(
      (expression, value) => expression && this.checkNegation(value),
      true,
    );
  }

  private checkNegation(value: string): boolean {
    return value.includes(Operator.NOT)
      ? !(value.replace('NOT ', '') === 'TRUE')
      : value === 'TRUE';
  }
}
