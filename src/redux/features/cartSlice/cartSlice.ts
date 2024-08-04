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
      state.cart.push({ ...action.payload, quantity: 1 });
    },
    updateQuantity: (state, action: PayloadAction<UpdateQuantity>) => {
      const { id, quantity } = action.payload;
      const needToupdateProduct = state.cart.find((items) => items._id === id);
      if (needToupdateProduct) {
        needToupdateProduct.quantity = Number(quantity);
      }
    },
    deleteProducts: (state, action: PayloadAction<string | any>) => {
      const restproduct = state.cart.filter((items) => items._id !== action.payload);
      state.cart = restproduct;
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, updateQuantity, clearCart, deleteProducts } = cartSlice.actions;

export default cartSlice.reducer;
