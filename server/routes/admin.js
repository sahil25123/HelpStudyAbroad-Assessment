import express from "express"
import { adminSignup } from "../controller/adminController.js";


const router = express.Router();

router.get("/login" , (req ,res) =>{
    res.send("Hey its login page")
})


router.post("/signup" , adminSignup);


export default router;