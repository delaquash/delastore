import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface CartProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
  title?: string;
}

interface CartState {
  [x: string]: any;
  cart: CartProps[];
}

const initialState: CartState = {
  cart: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartProps>) => {
      const presentItem = state.cart.find((item) => item?.id === action?.payload?.id)
        if(presentItem){
          state.cart = state.cart.map((cartItem)=> 
            cartItem.id === action.payload.id ? 
              { ...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
          )
        } else {
          state.cart = [...state.cart, {...action.payload, quantity: 1}]
        }
      // if (presentItem) {
      //   presentItem.quantity++;
      // } else {
      //   state.cart.push({ ...action.payload, quantity: 1 });
      // }
    },
    removeFromCart: (state, action: PayloadAction<CartProps>) => {
      const { id } = action.payload;
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = removeItem;
    },
    incrementQuantity: (state, action: PayloadAction<CartProps>) => {
      const { id, quantity } = action.payload;
      const increasedQuantity = state.cart.find(
        (item) => item.id === action.payload.id
      );
      {
        increasedQuantity && increasedQuantity.quantity++;
      }
      // if(increasedQuantity){
      //     increasedQuantity.quantity++
      // }
    },
    reduceQuantity: (state, action: PayloadAction<CartProps>) => {
      const { id } = action.payload;
      const itemToUpdate = state.cart.find((item) => item.id === id);

      if (itemToUpdate) {
        if (itemToUpdate.quantity === 1) {
          // If quantity is 1, remove the item from the cart
          state.cart = state.cart.filter((item) => item.id !== id);
        } else {
          // Decrease quantity by 1
          itemToUpdate.quantity--;
        }
      }
    },
    cleanCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  cleanCart,
  reduceQuantity,
  incrementQuantity,
  removeFromCart,
} = CartSlice.actions;
export const userSelector = (state: RootState) => state.cart;
export default CartSlice.reducer;
