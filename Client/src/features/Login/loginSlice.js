import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: localStorage.getItem("isLogin") || false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
      localStorage.setItem("isLogin", state.isLogin);
    },
    logout: (state) => {
      state.isLogin = false;
      localStorage.setItem("isLogin", state.isLogin);
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
