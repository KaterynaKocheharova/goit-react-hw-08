import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
  filter: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filterInitialState,
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
