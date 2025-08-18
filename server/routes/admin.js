import express from "express"
const router = express.Router();

router.get("/login" , (req ,res) =>{
    res.send("Hey its login page")
})

export default router;