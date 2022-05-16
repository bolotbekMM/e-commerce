import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) =>
          item.id === action.payload.id && item.color === action.payload.color
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.colorId === action.payload.colorId
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.colorId !== action.payload.colorId
        );

        state.cartItems = nextCartItems;
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    removeFromCart(state, action) {
      const exist = state.cartItems.find((el) => {
        if (el.colorId === action.payload.colorId) {
          return el;
        }
      });

      if (exist) {
        state.cartItems = state.cartItems.filter((item) => {
          return item.colorId !== action.payload.colorId;
        });
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      return state;
      // state.cartItems.map((cartItem) => {
      //   if (cartItem.id === action.payload.id) {
      //     if (cartItem.color === action.payload.color) {
      //       console.log(action.payload.color, 'action.payload.color');
      //       const nextCartItems = state.cartItems.filter((item) => {
      //         return (
      //           item.color !== action.payload.color && item.id !== cartItem.id
      //         );
      //       });

      //       state.cartItems = nextCartItems;
      //       return state.cartItems;
      //     }
      //   }
      //   localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      //   return state;
      // });
    },

    clearCart(state, action) {
      state.cartItems = [];
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
  },
});

// export const { addToCart } = cartSlice.actions;
export default cartSlice;
