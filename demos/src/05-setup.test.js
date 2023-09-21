// this is how to isolate a group of test by adding them to describe()

describe('Sets', () => {
  // This before all is for ALL tests
  beforeAll(() => {
    console.log('before all');
    // e.g. up db before cases
  });
  afterAll(() => {
    console.log('after all');
    // e.g. db down before cases
  });
  beforeEach(() => {
    console.log('before each and one');
  });
  afterEach(() => {
    console.log('after each and one');
  });

  test('case 1', () => {
    expect(1 + 1).toBe(2);
  });
  test('case 2', () => {
    expect(2 + 2).toBe(4);
  });
  test('case 3', () => {
    expect(3 + 3).toBe(6);
  });
  test('case 4', () => {
    expect(4 + 4).toBe(8);
  });
  test('case 5', () => {
    expect(5 + 5).toBe(10);
  });

  describe('Set 2 *', () => {
    // This before all is for set to describe scope
    beforeAll(() => {
      console.log('before all SCOPE SET 2!');
      // e.g. up db before cases
    });
    test('case 1', () => {
      expect(1 * 1).toBe(1);
    });
    test('case 2', () => {
      expect(2 * 2).toBe(4);
    });
    test('case 3', () => {
      expect(3 * 3).toBe(9);
    });
    test('case 4', () => {
      expect(4 * 4).toBe(16);
    });
    test('case 5', () => {
      expect(5 * 5).toBe(25);
    });
  });
});
