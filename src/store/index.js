import { init } from '@rematch/core';
import selectPlugin from '@rematch/select';
import * as dashboardModels from '../screens/Dashboard/models';
import * as sharedModels from '../shared/models';
const store = init({
  models: {
    //models
    ...dashboardModels,
    ...sharedModels,
  },
  plugins: [selectPlugin()],
});

export default store;
export const { dispatch, select } = store;
