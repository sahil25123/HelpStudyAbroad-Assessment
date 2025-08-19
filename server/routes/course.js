import express from "express";
import { course } from "../controller/courseController";

const router = express.Router();

router.get("/upload" , (req, res)=>{
    res.send("This is in the coures upload")
})
router.post("/upload" ,course);
