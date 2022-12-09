const express = require("express")
const database = require("../database/database")
const app = express()

exports.UserfindFunc = async (req, res) => {
    if(database.findUser(req.query.name).length != 0){
        res.status(200).json({
            msg: await database.findUser(req.query.name)
        })
    }
}