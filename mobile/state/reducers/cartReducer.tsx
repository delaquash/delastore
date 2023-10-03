import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface CartProps {
    id: number;
    name: string;
    price: number;
    quantity: number; 
}

interface CartState {
    cart: CartProps[];
  }

const initialState: CartState = {
    cart: []
}

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartProps>)=> {
            const { id, name, quantity, price } = action.payload
            const presentItem = state.cart.find((item)=> item.id === action.payload.id)
            if(presentItem){
                presentItem.quantity++
            }  else {
                state.cart.push({ ...action.payload, quantity: 1})
            }
        } 
         
    }
})


export const { addToCart } =
  CartSlice.actions;
export const userSelector = (state: RootState) => state.userReducer;
export default CartSlice.reducer;
