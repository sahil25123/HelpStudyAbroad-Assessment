import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
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

export const adminLogin = async(req , res) =>{
    try{
        const {email , password} = req.body;

    const admin  = await adminModel.findOne({email});

    if(!admin){
        return res.status(400).json({message :"Invalid Credentials"})
    }
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign({
        id:admin._id},
        process.env.JWT_SECRET,
    {expiresIn :"1h"} )

    res.status(200).json({message:"Logged In Succefully"})
    }
    catch(e){
        res.status(500).json({error :e.message})
    }
}

 export const adminPrtected = (req, res) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ error: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ message: "Welcome Admin!", decoded });
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
};



