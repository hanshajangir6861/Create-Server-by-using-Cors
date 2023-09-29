import express from "express"
import cors from "cors"

let students=[
    {id:101,Name:"Hansha",age:22,phone:123456793},
    {id:102,Name:"Nisha",age:23,phone:123456794},
    {id:103,Name:"Arpita",age:24,phone:123458893},

];
const app=express()
app.use(express.json())

app.use(cors({origin:"http://localhost:5173"}))

app.get("/",(req,res)=>{
    res.json(students)
})
 app.post("/new", (req,res)=>{
    const newStudent=req.body
     const studentsid= students[students.length-1].id+1
    newStudent.id = studentsid
    students.push(newStudent)
    res.json(students)
 })

app.listen(4000,()=>console.log("The server has started"))