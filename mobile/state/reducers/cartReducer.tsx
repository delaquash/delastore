import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface CartProps {
    id: string;
    cart: [] 
}


// cart: 

const initialState: CartProps = {
    cart: [],
    id: ""
}

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartProps>)=> {
            const presentItem: any = state.cart.find((item: { id: string; })=> item.id === action.payload.id)
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
