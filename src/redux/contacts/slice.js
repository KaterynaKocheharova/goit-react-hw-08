import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from "./operations";

export const handleError = (state, action) => {
  state.loading = null;
  state.error = action.payload;
};

const contactsInitialState = {
  items: [],
  loading: null,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = "fetching-contacts";
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.error = null;
        state.loading = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleError)
      .addCase(addContact.pending, (state) => {
        state.loading = "adding-contact";
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(addContact.rejected, handleError)
      .addCase(deleteContact.pending, (state) => {
        state.loading = "deleting-contact";
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleError)
      .addCase(updateContact.pending, (state) => {
        state.loading = "updating-contact";
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, ...action.payload };
          } else {
            return item;
          }
        });
      })
      .addCase(updateContact.rejected, handleError);
  },
});

export const contactsReducer = contactsSlice.reducer;
