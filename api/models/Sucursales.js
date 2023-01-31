import {Schema,model} from "mongoose";

const Sucursal = new Schema({

    nombre:{
        type: String,
        required: true,
        trim:true,
        
    },
    
   direccion:{
        type: Location,
        required: true,
        trim:true,
        unique: true,
    },
    
    horarios:{
        type:Date,
        required:true,
        
    }
},
{versionKey:false,
    timestamps:true
});
export default model("Sucursal",Sucursal)