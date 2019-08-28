import axios from 'axios';
import * as objectReducers from '../utilities/objectReducers';
import waitFor from '../utilities/waitFor';

const STORAGE_KEY = 'currentUser';

/** null = user is not logged in */
const LOGGED_OUT_STATE = null;

function readFromStorage() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch (error) {
    return LOGGED_OUT_STATE;
  }
}

function writeToStorage(data) {
  try {
    if (data) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  } catch (error) {
    // Ignore errors
  }
}

export default {
  state: readFromStorage(),
  reducers: objectReducers,
  effects: dispatch => ({
    /** Log user in */
    async login() {
      dispatch.loader.setLoading(true, 'currentUser.login');
      await waitFor(1000);
      const response = await axios.get('/data/currentUser.json');
      dispatch.loader.setLoading(false, 'currentUser.login');
      writeToStorage(response.data);
      this.replace(response.data);
    },

    /** Log user out */
    async logout() {
      await waitFor(100);
      writeToStorage(LOGGED_OUT_STATE);
      this.replace(LOGGED_OUT_STATE);
    },
  }),
};
