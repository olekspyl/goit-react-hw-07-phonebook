import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com"

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
    
};


 export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
        const response = await axios.post("/users/signup", credentials);
         token.set(response.data.token);     
        return response.data;
    } catch (e) {
return thunkAPI.rejectWithValue(e.message);
    }
     });


   export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
        const response = await axios.post("/users/login", credentials);
         token.set(response.data.token);     
        return response.data;
    } catch (e) {
return thunkAPI.rejectWithValue(e.message);
    }
       });

       export const logout = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
        await axios.post("/users/logout");
        token.unset();        
    } catch (e) {
return thunkAPI.rejectWithValue(e.message);
    }
});

export const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
  
        const state = thunkAPI.getState();   
        const persistedToken = state.auth.token;

        if (!token) {
            console.log("токен відсутній");
            return;
      }
      
      token.set(persistedToken);
      
      try {
        const response = await axios.get("/users/current");
        return response.data;
    } catch (e) {
return thunkAPI.rejectWithValue(e.message);
    }
       });





