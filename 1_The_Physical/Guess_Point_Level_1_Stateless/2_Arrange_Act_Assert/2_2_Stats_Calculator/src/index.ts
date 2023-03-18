type Params = number[];

type Result = {
  maxNumber: number;
};

export class StatsCalculator {
  public calculate(input: Params): Result {
    const maxNumber = input.reduce(
      (result, value) => (value > result ? value : result),
      -Infinity,
    );

    return {
      maxNumber,
    };
  }
}
