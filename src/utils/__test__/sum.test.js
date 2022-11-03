import sum from '../sum';

describe('Testing sum function', () => {
	it('should result 3 if 1 and 2 passed as a params', () => {
		expect(sum(1, 2)).toBe(3);
	});

	it('should result -10 if both of params is -5', () => {
		expect(sum(-5, -5)).toBe(-10);
	});
});
