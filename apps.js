const express = require('express')
const morgan = require('morgan')
const app = express()
const postRoute = require("./routes/post")

/*middleware
const myOwnMiddleware =(req,res,next)=>{
  console.log("middleware applied!!")
  next()
}
app.use(myOwnMiddleware)
*/

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://yustinusv:nanda333@clusternode.hhrgh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

//middleware
app.use(morgan("dev"))
app.use('/', postRoute)


const port = 8080
app.listen(port,()=>{
  console.log(`A Node Js API is listening on port: ${port}`)
})
