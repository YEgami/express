var express = require('express');
var router = express.Router();
const cors = require('cors');


const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://******";
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