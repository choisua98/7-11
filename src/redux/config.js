import { configureStore } from "@reduxjs/toolkit";
import products from "./products";
import cart from "./cart";

// 2. configureStore 사용하기
const store = configureStore({
  reducer: {
    // 6. reducer에 이렇게 넣어주기
    products: products.reducer,
    cart: cart.reducer,
  },
});

export default store;
