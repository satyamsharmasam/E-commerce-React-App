import { configureStore } from '@reduxjs/toolkit';
import { api } from './slice/apiSlice';
import cartReducer from './slice/cartSlice';
import alertReducer from './slice/alertSlice';
import { loadState, saveState } from '../src/utils/localStorage';

// Step 1: Load persisted state
const persistedState = loadState();

// Step 2: Configure store with preloadedState
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    alert: alertReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  preloadedState: persistedState, // 👈 LocalStorage se Redux state load
});

// Step 3: Subscribe to store changes and save to localStorage
store.subscribe(() => {
  // ✅ Save only required parts (e.g., cart)
  saveState({
    cart: store.getState().cart,
  });
});
