const express=require("express")

const app=express()

app.get("/",(req,res)=>{
    console.log(__dirname);
    res.sendFile(__dirname+"/index.html");

// res.send("hello from node");

})

app.listen(3000,()=>{
console.log("server start at port n:3000");
})