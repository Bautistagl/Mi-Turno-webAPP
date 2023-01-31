import {Schema,model} from "mongoose";

const User = new Schema({

    name:{
        type: String,
        required: true,
        trim:true,
        
    },
    lastName:{
        type: String,
        required: true,
        trim:true,

    },
    email:{
        type: String,
        required: true,
        trim:true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        trim:true,
    },
    salt:{
        type: String,
    },
    dni:{
        type: Number,
        required:true,
        unique:true,
    }
},
{versionKey:false,
    timestamps:true
});
export default model("User",User)