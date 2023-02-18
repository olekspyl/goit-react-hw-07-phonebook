import { createSlice } from "@reduxjs/toolkit";
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { fetchContacts, addContact, deleteContact } from "./operations";

const persistConfig = {
  key: 'root',
  storage,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
  contacts: {
    items: [],
    isLoading: false,
    error: null
  },
  filter: ""
  },
  reducers: {changeFilter(state, { payload }) {
    state.filter = payload;
    }},
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,

    [fetchContacts.fulfilled] (state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },
    // prepare: ({ id, name, number }) => {
    //     return {
    //       payload: {
    //         id,
    //         name,
    //         number,
    //       },
    //     };
    //   },
    [deleteContact.fulfilled] (state, action)  {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
                contact => contact.id === action.payload
            );
            state.items.splice(index, 1);
    },
  },
  

}
);


export const {changeFilter} = contactsSlice.reducer;
export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);

