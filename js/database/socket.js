const io = require("socket.io")(4000, {
    conrs:{
        origin: ["http://localhost:5500"]
    }
})

io.on("connection", socket => {
    console.log("vaaaa")
})