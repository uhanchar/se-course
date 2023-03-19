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

    return input.split(/[()]+/).some((part) => {
      return this.parseInput(part, Operator.OR).some((chunk) => {
        return this.transformValuesToExpression(
          this.parseInput(chunk, Operator.AND),
        );
      });
    });
  }

  private parseInput(input: string, operator: Operator) {
    return input.split(` ${operator} `);
  }

  private transformValuesToExpression(values: string[]): boolean {
    return values.reduce((expression, value) => {
      return expression && this.checkNegation(value);
    }, true);
  }

  private checkNegation(value: string): boolean {
    return value.includes(Operator.NOT)
      ? !(value.replace('NOT ', '') === 'TRUE')
      : value === 'TRUE';
  }
}
