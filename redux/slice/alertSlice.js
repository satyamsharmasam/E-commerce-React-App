import { createSlice } from '@reduxjs/toolkit';

const alertSlice = createSlice({
  name: 'alert',
  initialState: {
    message: '',
    type: '',
    icon: null,
  },
  reducers: {
    showAlert: (state, action) => {
      state.message = action.payload.message;
      state.type = action.payload.type;
      state.icon = action.payload.icon;
    },
    hideAlert: (state) => {
      state.message = '';
      state.type = '';
      state.icon = '';
    },
  },
});
export const { showAlert, hideAlert } = alertSlice.actions;
// Thunk for showing and auto-hiding alert
export const triggerAlert =
  (payload, duration = 5000) =>
  (dispatch) => {
    dispatch(showAlert(payload));
    setTimeout(() => dispatch(hideAlert()), duration);
  };
export default alertSlice.reducer;
