const express = require("express")
const database = require("../database/database")
const app = express()


exports.fetchRecive = async (req, res) =>{
    if(await database.returnMSG(req.query.sender, req.query.reciver).length != 0){
        res.status(200).json({
            msg: await database.returnMSG(req.query.sender, req.query.reciver)
        })
    }
}