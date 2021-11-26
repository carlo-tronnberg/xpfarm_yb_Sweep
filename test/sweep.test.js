const sweep = require('../src/sweep');

test('adds 1 + 2 to equal 3', () => {
  expect(sweep(1, 2)).toBe(2);
});

describe('UAT description (what the user would accept)', () => {
  describe('Scenario #1 - Adding numbers', () => {
    test.each`
      a    | b    | expected
      ${1} | ${2} | ${2}
      ${3} | ${2} | ${4}
    `(
      'GIVEN numbers $a and $b WHEN adding them THEN we should get $expected',
      ({ a, b, expected }) => {
        expect(sweep(a, b)).toEqual(expected);
      }
    );
  });
});
