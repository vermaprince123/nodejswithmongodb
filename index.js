const http = require("http")
const expressi = require("express")
const bodyParser= require('body-parser')
const app = expressi()
app.use(bodyParser.urlencoded({ extended: true }))
const mongo = require("mongodb").MongoClient


const url = "mongodb://localhost:27017/mydb";

mongo.connect(url, function(err, db) {

  if (err) throw err;
  const database_mongo = db.db("mydb")
  const collection_mongo = database_mongo.collection("model")  


  
  app.get("/", (req, res)=>{
      res.sendFile(__dirname+"/home.html")
  })


  app.post("/quotes", (req, res)=>{
      collection_mongo.insertOne(req.body)
      res.sendFile(__dirname + "/thankyou.html")
  })



app.listen(2000, function() {
    console.log('listening on 2000')
  })


 
});

