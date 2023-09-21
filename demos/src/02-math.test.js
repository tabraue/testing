const { minus, div, mult } = require('./02-math');

describe('Test for math', () => {
  test('restar 2 - 1 es igual a 1', () => {
    expect(minus(2, 1)).toBe(1);
  });

  test('multiplicar 2 * 2 es igual a 4', () => {
    expect(mult(2, 2)).toBe(4);
  });

  test('dividir 2 / 2 es igual a 2', () => {
    expect(div(2, 1)).toBe(2);
    expect(div(5, 2)).toBe(2.5);
  });

  test('dividir entre cero', () => {
    expect(div(2, 0)).toBe(null);
    expect(div(5, 0)).toBeNull();
  });
});
