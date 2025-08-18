import bcrypt from "bcryptjs"
import adminModel from "../models/admin.js";


 export const adminSignup = async(req , res) =>{

    try { 
        const {email , password} = req.body ; 
    const hashedPass = await bcrypt.hash(password , 10 );

    const admin =  new adminModel({email ,  password:hashedPass}); 

     await admin.save();

    res.status(200).json({message :"Admin Registered"})

    }
    catch(e){
        console.log("Error in the admin controller " , e)
        res.status(500).json({message :"Error in the Admin Controller"})
    }
   


}

