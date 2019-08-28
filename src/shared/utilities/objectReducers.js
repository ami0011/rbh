/**
 * Replace the entire state object with a new one
 * @param {Object} state previous state
 * @param {Object} newState new state
 * @returns {Object} new state
 */
export function replace(state, newState) {
  return newState;
}

/**
 * Update the state object with new values
 * @param {Object} state previous state
 * @param {Object} partialState new values for the state
 * @returns {Object} updated state
 */
export function update(state, partialState) {
  return { ...state, ...partialState };
}
