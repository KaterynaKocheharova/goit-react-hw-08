import { createSlice } from "@reduxjs/toolkit";
import { register, login, logOut, refreshUser } from "./operations";
import { handleError, handlePending } from "../contacts/slice";

const authInitialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  loading: false,
  error: null,
};

const auth = createSlice({
  name: "auth",
  initialState: authInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.loading = false;
        state.error = null;
      })
      .addCase(register.rejected, handleError)
      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.loading = false;
        state.error = null;
      })
      .addCase(login.rejected, handleError)
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.user = { name: null, email: null };
        state.token = null;
        state.loading = false;
        state.error = null;
      })
      .addCase(logOut.rejected, handleError)
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
        state.loading = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
        state.isRefreshing = false;
        state.loading = false;
        state.error = null;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const authReducer = auth.reducer;
