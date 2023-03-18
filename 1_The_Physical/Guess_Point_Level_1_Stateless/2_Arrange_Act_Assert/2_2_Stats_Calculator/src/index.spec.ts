import { StatsCalculator } from './index';

const testInput = [2, 4, 21, -8, 53, 40];

describe('StatsCalculator tests', () => {
  it('should define max number', () => {
    const sut = new StatsCalculator();

    const { maxNumber } = sut.calculate(testInput);

    expect(maxNumber).toBe(53);
  });

  it('should return min number', () => {
    const sut = new StatsCalculator();

    const { minNumber } = sut.calculate(testInput);

    expect(minNumber).toBe(-8);
  });

  it('should return items number', () => {
    const sut = new StatsCalculator();

    const { itemsLength } = sut.calculate(testInput);

    expect(itemsLength).toBe(6);
  });

  it('should return average number', () => {
    const sut = new StatsCalculator();

    const { averageNumber } = sut.calculate(testInput);

    expect(averageNumber).toBe(18.666666666667);
  });
});
