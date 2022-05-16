import { createSlice } from '@reduxjs/toolkit';
import { getProductsFromServer } from './productsAction';

const initialState = {
  items: [],
  status: '',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},

  extraReducers: {
    [getProductsFromServer.pending]: (state, action) => {
      state.status = 'panding';
    },
    [getProductsFromServer.fulfilled]: (state, action) => {
      state.status = 'fulfilled';
      state.items = action.payload;
    },
    [getProductsFromServer.rejected]: (state, action) => {
      state.status = 'rejected';
    },
  },
});

export default productsSlice;
