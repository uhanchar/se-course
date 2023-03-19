enum Operator {
  AND = 'AND',
  OR = 'OR',
  NOT = 'NOT',
}

enum Operand {
  TRUE = 'TRUE',
  FALSE = 'FALSE',
}

export class BooleanCalculator {
  public calculate(input: string) {
    if (!input) {
      throw new Error('Not valid input');
    }

    return this.parseInput(input, /[()]+/)
      .some((part) => {
        return this.parseInput(part, Operator.OR)
          .some((chunk) => {
            return this.transformValuesToExpression(
              this.parseInput(chunk, Operator.AND),
            );
        });
    });
  }

  private parseInput(input: string, operator: Operator | RegExp) {
    const separator = operator instanceof RegExp ? operator : ` ${operator} `;

    return input.split(separator);
  }

  private transformValuesToExpression(values: string[]): boolean {
    return values.reduce((expression, value) => {
      return expression && this.checkNegation(value);
    }, true);
  }

  private checkNegation(value: string): boolean {
    return value.includes(Operator.NOT)
      ? !(value.replace('NOT ', '') === Operand.TRUE)
      : value === Operand.TRUE;
  }
}
