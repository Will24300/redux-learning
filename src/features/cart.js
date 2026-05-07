import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], total: 0},
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
      state.total += action.payload.price;
    },
    removeItems: (state, action) => {
      state.items.filter((item)=> item.id !== action.payload)
    }
  }
})

export const {addItems, removeItems} = cartSlice.actions;
export default cartSlice.reducer;


