const database = require("../database/database.js")
const express = require("express")
const app = express()
const Userfind = require("../serverFunc/Userfind")
const MSGreciveFetch = require("../serverFunc/MSGreciveServer")
const regFunc = require("../serverFunc/reg")
const logFunc = require("../serverFunc/logFunc")
const { ShowUsers } = require("../serverFunc/Users.js")
const cors = require("cors")
const io = require("socket.io")(process.env.PORT || 3000, {
    cors: {
        origin: "*"
    }
})

io.on("connection", socket => {
    console.log("user connected to the socket")
    socket.on("join_name_room", name => {
        socket.join(name)
    })
    socket.on ("openMsgBar", async (mainame, oldname, localName) => {
        socket.broadcast.to(mainame).emit("massage", mainame)
        console.log(mainame, localName)
    })
    socket.on("sendMsg", (msg, name, hisname) => {
        socket.broadcast.to(name).emit("reciveMsg", msg, name, hisname)
    })
    socket.on("MSGrecived", (hisname, name, msg) => {
        database.createMsg(hisname, name, msg)
        console.log("msgrecived")
    })
})



app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get(`/`, (req, res) => {
    res.send("hi")
})
app.get(`/reg`, regFunc.reg)
app.get(`/log`, logFunc.log)
app.get(`/users`, ShowUsers)
app.get(`/MSG`, MSGreciveFetch.fetchRecive)
app.get(`/user`, Userfind.UserfindFunc)

port = process.env.PORT
app.listen(port, () =>{
    console.log(`listenin port ${port}`)
})
