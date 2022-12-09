const express = require("express")
const database = require("../database/database")
const app = express()


exports.log = async (req, res) => {
    if((await database.logUser(req.query.name, req.query.password)).length == 1){
        res.status(200).json({
            msg: "OK",
        })
    }else if((await database.logUser(req.query.name, req.query.password)).length == 0){
        res.status(200).json({
            msg: "NOPE",
        })
    }
}