import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: true
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // to remove the cart
    clearCart: (state) => {
      state.cartItems = [];
    },
    // to remove a single item
    removeItem: (state, action) => {
      // console.log(action);
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) =>
        item.id !== itemId);
    },
    // to increase cart item. Here we are also destructure payload
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    // to decrease cart item. Here we are also destructure payload
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    // to calculate total items in cart and the total price of all the items in cart
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      })
      state.amount = amount;
      state.total = total;
    },
  }
});

// console.log(cartSlice);
export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;