var express = require('express');
var router = express.Router();
const cors = require('cors');
require('dotenv').config();

const { MongoClient } = require("mongodb");
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

router.use(cors());

router.get('/', async (req, res) => {
    //データベースの指定
    const database = client.db('notes');
    const notes = database.collection('notes');

    //データベースからデータ取得 id2を取得
    const query = {name:'Yasushi'};
    const note = await notes.findOne(query);

    res.json(note);
})

module.exports = router;