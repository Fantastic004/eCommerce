import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./cartSlice";
import authSlicerReducer from "./AuthSlice";

export const Store = configureStore({
  reducer: {
    cart: cartSliceReducer,
    auth: authSlicerReducer,
  },
});
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
