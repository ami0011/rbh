/**
 * Wait for a specified amount of time
 * @param {number} delay amount of time (in milliseconds)
 * @returns {Promise}
 */
export default function waitFor(delay) {
  return new Promise(resolve => setTimeout(resolve, delay));
}
