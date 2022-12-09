const mongoose = require("mongoose")

const MassageModel = new mongoose.Schema({
    sender:{
        required: [true, "sender is not defined"],
        type: String,
        unique: [false]
    },
    reciver: {
        required: [true, "reciver is not defined"],
        type: String,
        unique: [false]
    },
    content: {
        required: [true, "content is not defined"],
        type: String,
        unique: [false]
    }
})


const Massages = mongoose.model("Massages", MassageModel, "Massages")


module.exports = Massages;