const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');
const mongojs=require('mongojs');
const app=express();
const db=mongojs('mycustomers',['table1'])

/*
//Middleware sequence
const log1=function(req,res,next){
  console.log('Log1');
  next();
}
app.use(log1);

const log2=function(req,res,next){
  console.log('Log2');
  next();
}
app.use(log2);

app.get('/',(req,res)=>{
  console.log('get');
  res.end();
});
*/

/*
//Overwrite by static file
//app.use(express.static(path.join(__dirname,'/public')));
app.get('/',(req,res)=>{
  //console.log('get');
  res.send('Hi see you again sss');
  res.end();
});
*/

/*
//send Json by bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
const people=[{name:"Nik"},{name:"Jane"},{name:"Ke"}];
app.get('/',(req,res)=>{
  res.json(people);
});
*/

/*
//View Engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.get('/',(req,res)=>{
  const title='customer';
  const people=[{name:"Joe"},{name:"Pol"},{name:"Sak"}];
  res.render('index1',{title:' EJS App',people:people});
});
*/

/*
//Post 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));

app.get('/',(req,res)=>{
    res.render('index2');
    res.end();
});
  
app.post('/add',(req,res)=>{
  const newUser=req.body.name;
  console.log(newUser);
  res.render('index2');
  res.end();
});
*/


//MongoDB
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));

app.get('/',(req,res)=>{
  db.table1.find((err,docs)=>{
    console.log(docs)
    res.render('index1',{title:' Customers',people:docs});
  });
});


app.listen(3000,()=>console.log('Server at 3000'));