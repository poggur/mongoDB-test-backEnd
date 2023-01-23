import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import {MongoClient} from "mongodb"

var jsonParser = bodyParser.json()
var app = express()

app.use(cors())

const client = new MongoClient("mongodb+srv://admin:Password@Cluster0.ktisoxh.mongodb.net/?retryWrites=true&w=majority")
const db = client.db("Database")

app.post("/", jsonParser,(req, res) =>{
    console.log(req.body)
    db.collection("users").insertOne({ username: req.body.username, password: req.body.password })
})

console.log("App started")

app.listen(8000)