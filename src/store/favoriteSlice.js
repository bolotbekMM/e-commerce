import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favItems: localStorage.getItem('favItems')
    ? JSON.parse(localStorage.getItem('favItems'))
    : [],
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorite(state, action) {
      const itemIndex = state.favItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.favItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.favItems.push(tempProduct);
      }
      localStorage.setItem('favItems', JSON.stringify(state.favItems));
    },

    removeFromFavorite(state, action) {
      state.favItems.map((favItem) => {
        if (favItem.id === action.payload.id) {
          const nextCartItems = state.favItems.filter(
            (item) => item.id !== favItem.id
          );

          state.favItems = nextCartItems;
        }
        localStorage.setItem('favItems', JSON.stringify(state.favItems));
        return state;
      });
    },

    clearFavorite(state, action) {
      state.favItems = [];
      localStorage.setItem('favItems', JSON.stringify(state.favItems));
    },
  },
});

// export const { addToCart } = cartSlice.actions;
export default favoriteSlice;
