import { createSlice } from '@reduxjs/toolkit'
const initialState = {meals: []}



export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      add_to_cart: (state, action) => {
        const existingItem = state.meals.find(item => item.id === action.payload.id);
        if (existingItem) {
          existingItem.quantity += action.payload.quantity; // Increase quantity if item exists
        } else {
          state.meals.push(action.payload); // Add new item to cart
        }
      },
  
  
      remove_from_cart: (state, action) => {
        state.meals = state.meals.filter((item) => item.id !== action.payload);
      },
      increase_quantity: (state, action) => {
        const item = state.meals.find(item => item.id === action.payload);
        if (item) {
          item.quantity += 1;
        }
      },
      decrease_quantity: (state, action) => {
        const item = state.meals.find(item => item.id === action.payload);
        if (item && item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.meals = state.meals.filter((item) => item.id !== action.payload); 
        }
      },
      reset_cart: (state) => {
        state.meals = [];
      }
    
    },
  })
  
  
  export const { add_to_cart, remove_from_cart ,increase_quantity, decrease_quantity,reset_cart} = cartSlice.actions
  
  export default cartSlice.reducer