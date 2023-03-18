type Params = number[];

type Result = {
  maxNumber: number;
  minNumber: number;
};

export class StatsCalculator {
  public calculate(input: Params): Result {
    return {
      maxNumber: this.findMaxNumber(input),
      minNumber: this.findMinNumber(input),
    };
  }

  private findMaxNumber(input: number[]): number {
    return input.reduce(
      (result, value) => (value > result ? value : result),
      -Infinity,
    );
  }

  private findMinNumber(input: number[]): number {
    return input.reduce(
      (result, value) => (value < result ? value : result),
      Infinity,
    );
  }
}
