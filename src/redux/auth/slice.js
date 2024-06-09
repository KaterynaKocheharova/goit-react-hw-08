import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  //   extraReducers: (builder) => {
  //     builder.addCase();
  //   },
});

export const authReducer = auth.reducer;
