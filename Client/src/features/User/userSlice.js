import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "api/userApi";

//  Thunk API
export const signIn = createAsyncThunk(
    'user/signIn',
    async (params, thunkAPI) => {
      const response = await userApi.signIn(params);
  
      // Save access token to storage
      const { access_token, token_type, expired_at } = response;
      const accessToken = `${token_type} ${access_token}`;
      localStorage.setItem('access_token', accessToken);
      localStorage.setItem('expired_at', expired_at); // expired_at is a timestamp
    }
  );
  
  export const getMe = createAsyncThunk(
    'user/getMe',
    async (params) => userApi.getMe(params)
  );
  
  
  // ---------------------
  //      MAIN SLICE
  // ---------------------
  const userSlice = createSlice({
    name: 'user',
    initialState: {
      current: {},
    },
    reducers: {},
    extraReducers: {
      [getMe.fulfilled]: (state, action) => {
        state.current = action.payload || {};
      },
      [getMe.rejected]: (state, action) => {
        state.current = {};
      },
    }
  });
  
  
  const { reducer: userReducer } = userSlice;
  export default userReducer;