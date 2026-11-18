// // console.log('Hello World!');

// const http=require('http');
// const server=http.createServer(function(req,res){
// res.write('This is my first nodejs class!');
// res.end();
// })
// const port=9000
// server.listen(port,()=>{
// console.log(`Server is running on port ${port}`);
// })

const express=require('express');
const app=express();
const {add}=require('./math')
const {router}=require('./Routes/appRoute');

app.use(router);

// app.get('/',(req,res)=>{
// res.send(`Sum of 1, 2 is ${add(1,2)}`);
// })


app.get('/users',(req,res)=>{
  const id=req.query.role;
res.send(`Users ${id}`);
})
app.listen(9000,()=>{
console.log(`Server is running on port 9000`);
})
