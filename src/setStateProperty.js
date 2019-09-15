/**
 * 
 * @param {*} state 
 * @param {*} action 
 * @param {*} stateField 
 */
const setStateProperty = (state, action, property) => ({
  ...state,
  [property]: action.payload,
});

module.exports = setStateProperty;
