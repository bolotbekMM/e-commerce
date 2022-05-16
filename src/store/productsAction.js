import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProductsRequest } from '../api/storeService';

export const getProductsFromServer = createAsyncThunk('products', async () => {
  try {
    const response = await getProductsRequest();
    return response?.data;
  } catch (error) {
    console.log(error);
  }
});
