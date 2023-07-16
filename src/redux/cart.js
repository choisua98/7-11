import { createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    deleteFromCart: (state, action) => {
      state = state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, deleteFromCart } = cart.actions;
export default cart;
