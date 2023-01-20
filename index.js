var express = require ("express")
var cors = require ("cors")
var bodyParser = require ("body-parser")
var MongoClient = require ("mongodb").MongoClient
const { text } = require("body-parser");
const { query } = require("express");

var jsonParser = bodyParser.json()
var app = express()

app.use(cors())
let db 

MongoClient.connect("mongodb+srv://admin:Password@Cluster0.ktisoxh.mongodb.net/?retryWrites=true&w=majority", (err, client) =>{
    db = client.db("Logins")
    if (err)
        console.log(err)
})

app.post("/", jsonParser,(req, res) =>{
    console.log(req.body)
    db.collection("users").insertOne({ username: req.body.username, password: req.body.password })
})

console.log("App started")

app.listen(8000)