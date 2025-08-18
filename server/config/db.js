import mongoose from "mongoose";

const connect =()=>{
    const MONGO_URI=process.env.MONGO_URI
    console.log(MONGO_URI)
    try{
        mongoose.connect("")


    }
    catch(e){
        console.log("Error occured in the MongoDB Connection" , e)
    }
    
}

export default connect;
