
const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

const app=express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/gidy")

const ProfileSchema=new mongoose.Schema({
name:String,
bio:String,
skills:String,
social:String
})

const Profile=mongoose.model("Profile",ProfileSchema)

app.get("/profile",async(req,res)=>{
let data=await Profile.findOne()
res.json(data)
})

app.post("/profile",async(req,res)=>{
let data=await Profile.findOne()

if(data){
data.name=req.body.name
data.bio=req.body.bio
data.skills=req.body.skills
data.social=req.body.social
await data.save()
res.json(data)
}else{
let newData=new Profile(req.body)
await newData.save()
res.json(newData)
}
})

app.listen(5000,()=>console.log("Server running on port 5000"))
