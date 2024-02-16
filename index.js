import express from "express"
import bodyParser from "body-parser";
const app=express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'));

app.get("/",(req,res)=>{
    res.render("index",{topic:"Dog"})
})
app.get("/registration",(req,res)=>{
    res.render("registration")
})
app.post("/registration",(req,res)=>{
    const email=req.body.email
    const password=req.body.password
    const phone=req.body.phone;
    const breed=req.body.breed;
    const gender=req.body.gender;
    console.log(email,password,phone,breed,gender)
})

app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
})