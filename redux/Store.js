import { configureStore } from '@reduxjs/toolkit';
import { api } from './slice/apiSlice';
import cartReducer from './slice/cartSlice';
import alertReducer from './slice/alertSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    alert: alertReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
