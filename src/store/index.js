import { configureStore } from '@reduxjs/toolkit';
import collectionSlice from './collectionSlice';
// import testSlice from './testSlice';

const store = configureStore({
  reducer: {
    collectionDetail: collectionSlice.reducer,

    // questions: collectionSlice.reducer,
    // test: testSlice.reducer,
  },
});

export const testActions = collectionSlice.actions;
// export const testSliceActions = testSlice.actions

export default store;
