// === matchers

// tests with objects need to be 'toEqual'

test('test an obj', () => {
  const data = { name: 'diana' };
  data.lastname = 'tabraue';
  expect(data).toEqual({ name: 'diana', lastname: 'tabraue' });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);
  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('strings', () => {
  expect('Diana').toMatch(/a/);
  expect('Diana').not.toMatch(/b/);
});

test('arrays', () => {
  const num = [1, 2, 3, 4];
  expect(num).toContain(2);
  expect(num).not.toContain(5);
});
