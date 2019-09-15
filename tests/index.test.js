const {
  setStateProperty, updateStateProperty, removeStateProperty,
} = require('../src');

/**
 * setStateProperty
 */
test('', () => {
  expect(setStateProperty({}, { payload: 1 }, 'one'))
    .toEqual({ one: 1 })
});

test('', () => {
  expect(setStateProperty({ one: 1 }, { payload: 2 }, 'two'))
    .toEqual({ one: 1, two: 2 })
});

/**
 * updateStateProperty
 */

test('', () => {
  expect(
    updateStateProperty(
      { one: {} }, { payload: { number: 1 } }, 'one'
    )
  )
    .toEqual({ one: { number: 1 } })
});

test('', () => {
  expect(
    updateStateProperty(
      {
        one: { number: 1 },
        two: { number: 0 }
      }, { payload: { number: 2 } }, 'two'
    )
  )
    .toEqual({ one: { number: 1 }, two: { number: 2 } })
});

/**
 * removeStateProperty
 */
test('', () => {
  expect(
    removeStateProperty(
      {
        one: { number: 1 },
        two: { number: 0 }
      }, 'two'
    )
  )
    .toEqual({ one: { number: 1 } })
});