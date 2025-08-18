import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    email :{
        type: String ,
        required : true , 
        unique :true
    },

    password :{
        type : String , 
        required : true 

    }
})

const adminModel = mongoose.model("adminModel" , UserSchema)

export default adminModel ; 
