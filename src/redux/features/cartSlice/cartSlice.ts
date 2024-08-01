import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TCart = {
  _id: string;
  image: string;
  name: string;
  brand: string;
  availableQuantity?: number;
  price: number;
  rating: number;
  description: string;
  delete: boolean;
  quantity: number;
};
type UpdateQuantity = {
  id: string;
  quantity: number;
};
type initialState = {
  cart: TCart[];
};

const intialState: initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: intialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TCart>) => {
      const isExist = state.cart.find((items) => items._id === action.payload._id);
      if (isExist) {
        return;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    updateQuantity: (state, action: PayloadAction<UpdateQuantity>) => {
      const { id, quantity } = action.payload;
      const needToupdateProduct = state.cart.find((items) => items._id === id);
      if (needToupdateProduct) {
        needToupdateProduct.quantity = quantity;
      }
    },
  },
});

export const { addToCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
