import { isChecked } from './isChecked';

test('should retrun true when in checkedIds', function () {
  const result = isChecked([1, 2, 3], 2);
  expect(result).toBe(true);
});

test('should return false when not in checkedIds', function () {
  const result = isChecked([1, 2, 3], 6);
  expect(result).toBe(false);
});
