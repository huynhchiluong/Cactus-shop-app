import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  isShowCart: false,
};

export const shoppingcartSlice = createSlice({
  name: "shoppingcart",
  initialState,
  reducers: {
    showCart: (state) => {
      state.isShowCart = true;
    },
    hideCart: (state) => {
      state.isShowCart = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { showCart, hideCart } = shoppingcartSlice.actions;

export default shoppingcartSlice.reducer;
