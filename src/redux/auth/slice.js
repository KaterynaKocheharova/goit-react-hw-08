import { createSlice } from "@reduxjs/toolkit";
import { register, login, logOut, refreshUser } from "./operations";
import { handleError } from "../contacts/slice";

const authInitialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  loading: null,
  error: null,
};

const auth = createSlice({
  name: "auth",
  initialState: authInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = "registering";
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.loading = null;
        state.error = null;
      })
      .addCase(register.rejected, handleError)
      .addCase(login.pending, (state) => {
        state.loading = "logining";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.loading = null;
        state.error = null;
      })
      .addCase(login.rejected, handleError)
      .addCase(logOut.pending, (state) => {
        state.loading = "logining-out";
      })
      .addCase(logOut.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.user = { name: null, email: null };
        state.token = null;
        state.loading = null;
        state.error = null;
      })
      .addCase(logOut.rejected, handleError)
      .addCase(refreshUser.pending, (state) => {
        state.loading = "refreshing";
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
        state.loading = null;
        state.error = null;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.loading = null;
        state.error = action.payload;
      });
  },
});

export const authReducer = auth.reducer;
