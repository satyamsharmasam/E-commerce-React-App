import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  subtotal: 0,
  total: 10,
};

const updateTotals = (state) => {
  state.subtotal = state.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  state.total = state.subtotal + state.total;
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
      state.totalQuantity++;
      updateTotals(state);
    },
    removeFromCart: (state, action) => {
      const { id, size } = action.payload;
      const existing = state.items.find((i) => i.id === id && i.size === size);

      if (existing) {
        state.totalQuantity -= existing.quantity;
        state.items = state.items.filter(
          (i) => !(i.id === id && i.size === size)
        );
        state.subtotal = state.items.reduce(
          (sum, i) => sum + i.price * i.quantity,
          0
        );
        state.total = state.subtotal + state.shipping;
      }
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item && item.quantity > 1) {
        item.quantity--;
        state.totalQuantity--;
      } else {
        state.items = state.items.filter((i) => i.id !== id);
        state.totalQuantity -= item.quantity;
      }
      updateTotals(state);
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
