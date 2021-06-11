const express = require('express')
const morgan = require('morgan')
const app = express()
const postRoute = require("./routes/post")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const MongoClient = require('mongodb').MongoClient
const bodyParse = require('body-parser')
const expressValidator = require('express-validator')
dotenv.config()

/*middleware
const myOwnMiddleware =(req,res,next)=>{
  console.log("middleware applied!!")
  next()
}
app.use(myOwnMiddleware)
*/


/*const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
client.connect(err => {
  const collection = client.db("test").collection("devices");
  client.close();
});*/

mongoose.connect(
  process.env.MONGO_URI,
  {useNewUrlParser:true}
).then(()=>console.log("DB Connection"))

mongoose.connection.on('error',err=>{
  console.log(`DB Connection Error ${err}`);
})



//middleware
app.use(morgan("dev"))
app.use(bodyParse.json())
app.use(expressValidator())
app.use('/', postRoute)


const port = process.env.PORT || 8080
app.listen(port,()=>{
  console.log(`A Node Js API is listening on port: ${port}`)
})
