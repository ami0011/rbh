import get from 'lodash/get';

/**
 * Set to error state
 * @param {Object} state previous state
 * @param {Object} response response from API
 * @returns {Object} new state
 */
export function loadError(state, error) {
  window.varoot = error;
  return {
    ...state,
    status: get(error, 'response.status') || 0,
    errorMessage: get(error, 'message'),
    isError: true,
    isLoading: false,
  };
}

/**
 * Replace the data with the new one
 * @param {Object} state previous state
 * @param {Object} response response from API
 * @returns {Object} new state
 */
export function loadStart(state) {
  return {
    ...state,
    errorMessage: null,
    isError: false,
    isLoading: true,
  };
}

/**
 * Replace the data with the new one
 * @param {Object} state previous state
 * @param {Object} response response from API
 * @returns {Object} new state
 */
export function loadSuccess(state, { data, status }) {
  return {
    data,
    status,
    errorMessage: null,
    isError: false,
    isLoading: false,
    updatedAt: new Date(),
  };
}

/**
 * Reset to initial state
 * @returns {Object} initial state
 */
export function reset() {
  return {
    data: null,
    errorMessage: null,
    isError: false,
    isLoading: false,
    status: 0,
    updatedAt: null,
  };
}
