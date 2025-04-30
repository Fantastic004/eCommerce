import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from './cartSlice'

export const Store = configureStore({
    reducer : {
        name: cartSliceReducer
    }
})
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

