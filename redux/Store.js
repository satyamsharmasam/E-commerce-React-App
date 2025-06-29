import { configureStore } from '@reduxjs/toolkit';
import { api } from '../redux/slice/apiSlice';
import cartReducer from '../redux/slice/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
