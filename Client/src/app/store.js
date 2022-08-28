import { configureStore } from "@reduxjs/toolkit";
import userReducer from "features/User/userSlice";
import counterReducer from "../features/counter/counterSlice";
import loginReducer from "../features/Login/loginSlice";
import shoppingcartReducer from "../features/ShoppingCart/shoppingcartSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
    shoppingcart: shoppingcartReducer,
    user: userReducer,
  },
});
