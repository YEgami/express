var express = require('express');
var router = express.Router();
const cors = require('cors');
require('dotenv').config(); // npm install dotenv でdotenvを入れないとダメ

const { MongoClient } = require("mongodb");
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

router.use(cors());

router.get('/', async (req, res) => {
    //データベースの指定
    const database = client.db('notes');
    const notes = database.collection('notes');

    // 全てのドキュメントを取得
    const note = await notes.find({}).toArray();

    res.json(note);
})

module.exports = router;