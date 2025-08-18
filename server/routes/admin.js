import express from "express"
import { adminLogin, adminPrtected, adminSignup } from "../controller/adminController.js";


const router = express.Router();

router.get("/login" , (req ,res) =>{
    res.send("Hey its login page")
})


router.get("/protected" , adminPrtected)
router.post("/login" , adminLogin)

router.post("/signup" , adminSignup);


export default router;