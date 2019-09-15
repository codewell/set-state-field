/**
 * 
 * @param {*} state 
 * @param {*} property 
 * @returns {object} - Next state
 */
const removeStateProperty = (state, property) => Object.getOwnPropertyNames(state)
  .reduce((accumulator, stateProp) => {
    console.log(accumulator, property, stateProp, state);
    if (stateProp !== property) {
      return {
        ...accumulator,
        [stateProp]: state[stateProp],
      }
    };
    return accumulator;
  }, {});

module.exports = removeStateProperty;