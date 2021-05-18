const express=require('express');
const app=express();
const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});

app.post('/',(req,res)=>{
    var weight=Number(req.body.weight),height=Number(req.body.height),result=weight/(height*height);
    res.send("The BMI is: "+parseInt(result));
});

app.listen(3000,()=>{
console.log("Server has started on port 3000");
});