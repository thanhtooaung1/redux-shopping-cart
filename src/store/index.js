import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth_slice";
import cartSlice from "./cart_slice";
import uiSlice from "./ui_slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
