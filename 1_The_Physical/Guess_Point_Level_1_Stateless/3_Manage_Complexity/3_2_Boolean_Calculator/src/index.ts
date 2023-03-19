export class BooleanCalculator {
  public calculate(input: string) {
    if (!input) {
      throw new Error('Not valid input');
    }
  }
}
