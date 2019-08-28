export default {
  state: new Set(),
  reducers: {
    setLoading(prevState, isLoading, loaderId) {
      const updatedState = new Set(prevState);
      if (isLoading && !prevState.has(loaderId)) {
        updatedState.add(loaderId);
        return updatedState;
      }

      if (!isLoading && prevState.has(loaderId)) {
        updatedState.delete(loaderId);
        return updatedState;
      }

      return prevState;
    },
  },
  selectors: {
    isLoading() {
      return state => state.loader.size > 0;
    },
  },
};
