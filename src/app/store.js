import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/product/productsSlice";

const store = configureStore({
  reducer: { products: productsSlice },
});
