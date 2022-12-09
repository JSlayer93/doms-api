const express = require("express")
const database = require("../database/database")
const app = express()


exports.reg = async (req, res) =>{
    console.log(req.query)
    try {
        await database.inputuserReg(req.query.name, req.query.password)
        res.status(200).json({
            msg: "baro",
        })
    } catch (err) {
        res.status(200).json({
            msg: "name is used",
            msg2: err
        })
        console.log(err)
    }
}