type Params = number[];

type Result = {
  maxNumber: number;
  minNumber: number;
  itemsLength: number;
};

export class StatsCalculator {
  public calculate(input: Params): Result {
    return {
      maxNumber: this.findMaxNumber(input),
      minNumber: this.findMinNumber(input),
      itemsLength: this.findItemsLength(input),
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

  private findItemsLength(input: number[]): number {
    return input.length;
  }
}
