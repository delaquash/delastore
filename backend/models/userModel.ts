import mongoose, { Mongoose } from "mongoose";
import { IUserProps } from "../types/userTypes";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    verified:{
        type: Boolean,
        default: false
    },
    verifiedToken:{
        type: String
    },
    addresses:[
        {
            name: String,
            mobile: Number,
            houseNo: String,
            street: String,
            landmark: String,
            city: String,
            country: String,
            postalCode: String
        }
    ],
    order:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order"
    }
],
    createdAt:{
        type: Date,
        default: Date.now
    }
})

export const User = mongoose.model<IUserProps>("User", userSchema);