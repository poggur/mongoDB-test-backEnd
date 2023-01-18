import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import User from './models/User.js';

const app = express();
const port = 8000;
const router = express.Router();
const jsonParser = bodyParser.json();

await mongoose.connect('mongodb+srv://admin:Password@cluster0.ktisoxh.mongodb.net/test');

const NewUser = new User({
    username: 'aaaaaaaaaa',
    password: 'aaaaaaaaaa'
})

// GET request
router.get('/endpoint', jsonParser, async (req, res) => {
})
// POST request
router.post('/endpoint', jsonParser, async (req, res) => {
})

app.use(bodyParser.json())
app.use(cors({ credentials: true, origin: true }));
app.use('', router);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

NewUser.save()