import multer from "multer"
import csv from "csv-parser";
import { Course } from "../models/Course.js";
import fs from "fs";


export const course =   async (req , res) =>{

if(!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
}

const results = []
fs.createReadStream(req.file.path)
    .pipe(csv())
    .on("data", (row) => results.push(({
        course_id: row["Course Code"] || row["Unique ID"],
        title: row["Course Name"],
        description: row["Overview/Description"] || row["Summary"],
        category: row["Discipline/Major"] || row["Specialization"],
        instructor: row["Professor Name"],
        duration: row["Duration (Months)"]
      })))
    .on("end", async () => {
      try {
        
        await Course.insertMany(results);
        res.status(200).json({ message: "Courses uploaded successfully", count: results.length });
      } 
      catch (err) {
        res.status(500).json({ error: err.message });
      } 
      finally {
        fs.unlinkSync(req.file.path); 
      }
    });


}