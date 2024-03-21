import {Schema, model} from "mongoose";

const userSchema = new Schema(
    {
        name:{
            type:String
        }
    }
)

export const usermodel = new model('users', userSchema)
