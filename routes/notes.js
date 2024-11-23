var express = require('express');
var router = express.Router();

const { MongoClient } = require("mongodb");
const uri = "***";
const client = new MongoClient(uri);

router.get('/', async (req, res) => {
    //データベースの指定
    const database = client.db('notes');
    const notes = database.collection('notes');

    //データベースからデータ取得 id2を取得
    const query = {id:1};
    const note = await notes.findOne(query);

    res.json(note);
})

module.exports = router;