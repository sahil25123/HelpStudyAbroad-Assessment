import express from "express";
import multer from "multer";

import { course } from "../controller/courseController.js";

const router = express.Router();

const upload = multer({dest :"uploads/"})


router.get("/upload" , (req, res)=>{
    res.send("This is in the coures upload")
})
router.post("/upload" , upload.single("file") ,course);

export default router;
