import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: null,
  TotalPrice: 0,
  TotalProduct: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    AddProduct: (state, { payload }) => {
      state.products = payload;
    },
    incrementProduct: (state, { payload }) => {
      const item = state.products.find((product) => product.id == payload);

      if (!item.amount) {
        item.amount = 1;
      } else {
        item.amount += 1;
      }
    },
    decrimentProduct: (state, { payload }) => {
      const item = state.products.find((product) => product.id == payload);

      item.amount -= 1;
    },
  },
});
export const { AddProduct, incrementProduct, decrimentProduct, AddToCart } =
  productSlice.actions;
export default productSlice.reducer;