import mongoose, { Mongoose } from "mongoose";
import { OrderProps } from "../types/orderTypes";

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true,
    },
    products:[
        {
            name:{
                type: String,
                required: true
            },
            quantity:{
                type: Number,
                required: true
            },
            price:{
                type: Number,
                required: true
            },
            image:{
                type: String,
                required: true
            }
        }
    ],
    totalPrice:{
        type: Number,
        required: true
    },
    shippingAdress:{
        name:{
            type: String,
            required: true
        },
        mobileNo:{
            type: Number,
            required: true
        },
        houseNo:{
            type: String,
            required: true
        },
        street:{
            type: String,
            required: true
        },
        landmark:{
            type: String,
            required: true
        },
        postalCode:{
            type: String,
            required: true
        }
    },
})

export const Order = mongoose.model<OrderProps>("Order", orderSchema);