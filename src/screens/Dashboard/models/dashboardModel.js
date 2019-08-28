import axios from 'axios';
import * as loaderReducers from '../../../shared/utilities/loaderReducers';
import waitFor from '../../../shared/utilities/waitFor';

export default {
  state: loaderReducers.reset(),
  reducers: loaderReducers,
  effects: {
    async fetchData() {
      this.loadStart();
      await waitFor(1000);
      try {
        const response = await axios.get('/data/accountSummary.json');
        this.loadSuccess(response);
      } catch (error) {
        this.loadError(error);
      }
    },
  },
  selectors: {
    getModel() {
      return state => state.dbdAccountSummary;
    },
  },
};
