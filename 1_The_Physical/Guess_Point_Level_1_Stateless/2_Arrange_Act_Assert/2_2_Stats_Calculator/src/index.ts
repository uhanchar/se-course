type Params = number[];

type Result = {
  maxNumber: number;
};

export class StatsCalculator {
  public calculate(input: Params): Result {
    return {
      maxNumber: this.findMaxNumber(input),
    };
  }

  private findMaxNumber(input: number[]): number {
    return input.reduce(
      (result, value) => (value > result ? value : result),
      -Infinity,
    );
  }
}
