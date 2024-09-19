import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/product/productsSlice";

const store = configureStore({
  reducer: {
    product: productsSlice,
  },
});

export default store;
