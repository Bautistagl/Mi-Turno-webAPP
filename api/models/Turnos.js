import {Schema,model} from "mongoose";

const Turno = new Schema({

    fecha:{
        type: Date,
        required: true,
        unique: true,
        
        
    },
   estado:{
        type: Boolean,
        required: true,
       

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
    }
},
{versionKey:false,
    timestamps:true
});
export default model("Turno",Turno)