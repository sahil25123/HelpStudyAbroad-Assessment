import multer from "multer"

const upload = multer({dest :"uploads/"})

export const course =  upload.single("file") , (req , res) =>{


}