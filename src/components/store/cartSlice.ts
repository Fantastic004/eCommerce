import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
  id: number | string;
  name: string;
  price: number;
  quantity: number;
  [key: string]: any;
};

type CartState = CartItem[];

const initialState: CartState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const itemExists = state.find((item) => item.id === action.payload.id);
      if (itemExists) {
        alert("Item already in cart! 🛒");
      } else {
        state.push({ ...action.payload, quantity: 1 });
        alert("Item added to cart! 🛒");
      }
    },
    removeItem(state, action: PayloadAction<string>) {
      const newProducts = state.filter((item) => item.id !== action.payload);

      return newProducts;
    },
    buyItem() {
      return [];
    },
    clearCartItem() {
      return [];
    },
    increaseQuantity(state, action: PayloadAction<string>) {
      const item = state.find((item) => item.id == action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity(state, action: PayloadAction<string>) {
      const item = state.find((item) => item.id == action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  removeItem,
  buyItem,
  clearCartItem,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
