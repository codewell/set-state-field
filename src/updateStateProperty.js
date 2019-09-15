/**
 * 
 * @param {object} state 
 * @param {string} action 
 * @param {string} property 
 * @returns {object} - Next state
 */
const updateStateProperty = (state, action, property) => ({
  ...state,
  [property]: {
    ...state[property],
    ...action.payload,
  },
});

module.exports = updateStateProperty;
