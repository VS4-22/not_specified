const express = require('express');
const app = express();
const path = require('path');
const cookPar = require('cookie-parser');
const usemod = require('./models/user');
const usemodd = require('./models/user2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
app.set('view engine','ejs');
app.use(express.json());
app.use(cookPar());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.get('/',(req,res)=>{
  res.render('login');
})
app.get('/create',(req,res)=>{
  res.render('index');
})
app.get('/cr',(req,res)=>{
  res.render('creat');
})

app.get('/logout',(req,res)=>{
   res.cookie('token',"");
   res.redirect('/');
})

app.post('/login',async function(req,res){
 let user = await usemodd.findOne({username:req.body.email});
 let usel = await usemodd.findOne({email:req.body.email});
if(!user) {
  if(!usel)return res.send("wrong password or username!!");
  else {
    bcrypt.compare(req.body.key,usel.key,function(err,result){
     if(result){
       let token = jwt.sign({email:usel.email},"shht");
       res.cookie("token",token);
       res.redirect('/read');
     }
     else res.send("wrong password or username!!");
    })
  }
}
else{
  bcrypt.compare(req.body.key,user.key,function(err,result){
    if(result) {
       let token = jwt.sign({email:user.email},"shht");
       res.cookie("token",token);
       res.redirect('/read');
    }
     else res.send("wrong password or username!!");
  })
}
})

app.get('/delete/:id', async (req,res)=>{
  let users = await usemod.findOneAndDelete({_id:req.params.id});
  res.redirect('/read');
})
app.get('/edit/:id', async (req,res)=>{
  let user = await usemod.findOne({_id:req.params.id});
  res.render('edit',{user});
})
app.get('/read',midwaylo, async (req,res)=>{
  let users = await usemod.find();
  res.render('read',{users});
})

app.post('/create',async (req,res)=>{
  let createduser = await usemod.create({
    name:req.body.name,
    email:req.body.email,
    image:req.body.image
  })
 res.redirect('/read');
})

app.post('/cr',async (req,res)=>{
  if (!req.body.name || req.body.name.trim() === "") {
    return res.json({ success: false, message: "Username cannot be blank" });
  }
  else if(req.body.email == "")res.send("Email missing!!")
  else if(req.body.key == "")res.send("password required")
    else
  {
    let user = await usemodd.findOne({email:req.body.email})
    if(user) return res.send("Email is already registerd ,pls try different email");
    let s = await bcrypt.genSalt(10)
    let hskey = await bcrypt.hash(req.body.key,s);
    let createduser = await usemodd.create({ 
      username:req.body.name,
      email:req.body.email,
      key:hskey
    })
    let token = jwt.sign({email:createduser.email},"shht");
   res.cookie("token",token);
   res.redirect('/read');
 }
})

app.post('/edit/:id',async (req,res)=>{
  let createduser = await usemod.findOneAndUpdate({
    _id:req.params.id}, {name:req.body.name,email:req.body.email,image:req.body.image},{new:true})
 res.redirect('/read');
})
function midwaylo(req,res,next){
  if(req.cookies.token ==='') return res.redirect("/?msg=login is required");
  else{
    let data = jwt.verify(req.cookies.token, "shht");
    req.user = data;
  }
  next();
}
app.listen(4000);