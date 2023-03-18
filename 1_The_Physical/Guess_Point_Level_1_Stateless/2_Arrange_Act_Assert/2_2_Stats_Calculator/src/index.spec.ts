import { StatsCalculator } from './index';

const testInput = [2, 4, 21, -8, 53, 40];

describe('StatsCalculator tests', () => {
  it('should define max number', () => {
    const sut = new StatsCalculator();

    const { maxNumber } = sut.calculate(testInput);

    expect(maxNumber).toBe(53);
  });
});
