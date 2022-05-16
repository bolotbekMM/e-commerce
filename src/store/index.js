import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from './productsSlice';
import CartSlice from './cartSlice';
import favoriteSlice from './favoriteSlice';

const store = configureStore({
  reducer: {
    products: ProductReducer.reducer,
    cart: CartSlice.reducer,
    favorites: favoriteSlice.reducer,
  },
});

export const productsAction = ProductReducer.actions;
export const cartAction = CartSlice.actions;
export const favoriteAction = favoriteSlice.actions;

export default store;
