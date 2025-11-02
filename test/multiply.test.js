const multiply = require('../src/multiply');

test('multiplies 3 × 4 to equal 12', () => {
  expect(multiply(3, 4)).toBe(12);
});

test('multiplies 0 × 5 to equal 0', () => {
  expect(multiply(0, 5)).toBe(0);
});
