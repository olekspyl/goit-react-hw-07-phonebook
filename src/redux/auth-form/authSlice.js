import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, fetchCurrentUser } from "./auth-operations";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
}

const persistConfig = {
  key: 'root',
    storage,
  whiteList: ["token"],
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [login.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [logout.fulfilled](state, action) {
            state.user = initialState.user;
            state.token = initialState.token;
            state.isLoggedIn = false;
        },
        [fetchCurrentUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
        }
    }
    }
)

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
