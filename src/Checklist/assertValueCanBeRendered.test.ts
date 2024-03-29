import { assertValueCanBeRendered } from './assertValueCanBeRendered';

test('should raise exception when not a string or number', function () {
  expect(function () {
    assertValueCanBeRendered(true);
  }).toThrow('value is not a string or a number');
});

test('should not raise an exception when string', function () {
  expect(function () {
    assertValueCanBeRendered('something');
  }).not.toThrow();
});

test('should not raise an exception when number', function () {
  expect(function () {
    assertValueCanBeRendered(3);
  }).not.toThrow();
});
