import express from "express";
import dotenv from "dotenv";
import connect from "./config/db.js";

import adminRoutes from "./routes/admin.js"
import recommedationRoutes from "./routes/recommendation.js"
import courseRoute from "./routes/course.js"
import searchRoute from "./routes/search.js"

dotenv.config();


const port = 9000;

const app= express();


connect();

app.use(express.json())


app.use("/api/admin" ,adminRoutes);
app.use("/api" , recommedationRoutes)
app.use("/api/courses",courseRoute)
app.use("/api" , searchRoute)


app.get("/" ,(req, res) =>{
    res.send("Hello  this is inside help study borad backend")
})

app.listen(port ,(req , res) =>{
    console.log(`Server is runnig on the port ${port}`)

})