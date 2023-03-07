import { configureStore} from "@reduxjs/toolkit";
import { persistStore} from 'redux-persist'
import {FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist'
import { filterReducer } from "./contacts/filterSlice";
import { contactsReducer } from "./contacts/slices";
import { authReducer } from "./auth-form/authSlice";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
    })
  }
});


export const persistor = persistStore(store);
