const mongoose = require("mongoose")
const dontenv = require("dotenv")
const regUser = require("./models/models.js")
const userId = require("./models/models.js")
const client = require("socket.io")
const Massages = require("./models/MsgModel.js")


dontenv.config({
    path: "./config.env"
})

DB = process.env.DBURL.replace("<PASSWORD>", process.env.DMPASSWORD)

mongoose.connect(DB).then(con => {console.log("DB connection succsesfull!")})

exports.inputuserReg = async (name, password) =>{
    await regUser.create({
        name: name,
        password: password,
    })
}
exports.logUser = async (name, password) =>{
    const data = await regUser.find({name: name, password: password});
    return data
}

exports.findUser = async (name) =>{
    const data = await regUser.find({name: name});
    return data
}

exports.getAll = async () =>{
    const data = await regUser.find()
    return data
}

// MASSAGES

exports.createMsg = async (sender, reciver, content) => {
    await Massages.create({
        sender: sender,
        reciver: reciver,
        content: content
    })
}

exports.returnMSG = async (sender, reciver) => {
    const data = await Massages.find({$or: [{
        sender: sender,
        reciver: reciver
    },{
        sender: reciver,
        reciver: sender
    }]})
    return data
}