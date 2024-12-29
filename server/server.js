const express=require('express')
const mongoose=require('mongoose')
const cookieParser=require('cookie-parser')
const cors=require('cors')

mongoose.connect("mongodb+srv://younes:y0070884420@cluster0.v54wo.mongodb.net/").then(()=>console.log("MongoDB connected")).catch((error)=>console.log(error));


const app=express()
const PORT=process.env.PORT || 5001


app.use(
  cors({
    origin:'http://localhost:5173/',
    methods:['GET','POST','DELETE','PUT'],
    allowedHeaders:[
      "Content-Type",
      "Athorization",
      "Cashe-Control",
      "Expires",
      "Pragma"
    ],
    credentials:true
  })
)

app.use(cookieParser())
app.use(express.json())

app.listen(PORT,()=>console.log(`Server is now running on port ${PORT}`))