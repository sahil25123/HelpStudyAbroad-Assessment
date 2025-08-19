import express from "express";
import multer from "multer";
import { Course } from "../models/Course.js";

import { course } from "../controller/courseController.js";

const router = express.Router();

const upload = multer({dest :"uploads/"})


router.get("/" , async (req, res)=>{
    try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
    
})
router.post("/upload" , upload.single("file") ,course);

export default router;
