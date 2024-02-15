import express from "express"

const app=express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get("/",(req,res)=>{
    res.render("index",{topic:"Dog"})
})

app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
})