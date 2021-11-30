require("dotenv").config()
const express = require ("express")
const server = express()
const port=process.env.PORT
server.listen(port, ()=>{console.log(`You are listening to port ${port}`);})

const items =[
    {id:1, name: "marlen" },
    {id:2, name: "flaca"}
]

//we use this to fetch API we created

server.get("/items", (req, res)=> {res.status(200).json(items)})

server.post("/items", (req, res)=> {
    console.log(req)
    res.status(201).send({id:3, name:"james"})})