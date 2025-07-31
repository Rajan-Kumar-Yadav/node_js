const express = require('express');
  const bodyParser = require('body-parser');
const app = express();

app.use((req,res, next) => {
  console.log("Frist Dummy Middleware",req.url,req.method);
  next();
})
app.use((req,res, next) => {
  console.log("second Dummy middleware",req.url, req.method);
  next();
})

// app.use((req,res,next) => {
//   console.log("Third middleware",req.url, req.method)
//   res.send(`<p>Welcome to Complete Coding </p>`)
// })

app.get("/",(req,res,next) => {
console.log("Handling / for GET", req.url, req.method);
  res.send(`<p>Welcome to Complete Coding </p>`)
})
 app.get("/contact-us",(req,res, next) => {
  console.log("Handling /contact-us for GET", req.url, req.method);
  res.send(`<h1>Please give your details here</h1>
    <form action="/contact-us" method="POST">
    <input type="text" name="name" placeholder="Enter your name" />
    <input type="email" name="email" placeholder="Enter your email" />
    <input type="Submit"/>
    </form>
    
    `);
 })

  app.post("/contact-us", (req,res, next) => {
  console.log("First handling", req.url, req.method, req.body);

  next();
 })
 app.use(bodyParser.urlencoded());

 app.post("/contact-us", (req,res, next) => {
  console.log("handling / contact-us for POST", req.url, req.method, req.body);

  res.send(`<h1>we will contact you shortly </h1>`)
 })
const PORT = 3000;
app.listen(PORT,() => {
  console.log(`server is runing on address http://localhost:${PORT}`)
})