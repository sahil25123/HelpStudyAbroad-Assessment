import express from "express";
import { recommendation } from "../controller/recommedation.js";

const router = express.Router();


router.get("/recommendations" , (req, res)=>{
    res.send("This is recommedation page")
});
router.post("/recommendations" , recommendation)

export  default router;
