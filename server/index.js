import express from "express";
import dotenv from "dotenv";
import connect from "./config/db.js";

import adminRoutes from "./routes/admin.js"
dotenv.config();


const port = 9000;

const app= express();

connect();


app.use(adminRoutes);
app.get("/" ,(req, res) =>{
    res.send("Hello  this is inside help study borad backend")
})

app.listen(port ,(req , res) =>{
    console.log(`Server is runnig on the port ${port}`)

})