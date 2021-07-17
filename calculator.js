// jshint esversion: 6

const { response, request } = require("express");
const express=require("express");
const bodyParser= require("body-parser");
const app=express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(require,response){
    response.sendFile(__dirname+"/index.html");
});

app.post("/", function(require,response){
   
     a=Number(require.body.num1);
     b=Number(require.body.num2);
      c=require.body.op;
    
     if(c=="+")
     ans=a+b;
     else if(c=="-")
     ans=a-b;
     else if(c=="*")
     ans=a*b;
     else if(c=="/")
     ans=a/b;
     else
     ans=a%b;
    ans=Number(ans);
    response.send(""+ans);
});

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});
