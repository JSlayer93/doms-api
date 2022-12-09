const mongoose = require("mongoose")
const dontenv = require("dotenv")

const ReguserSchema = new mongoose.Schema({
    name:{
        required: [true, "Name is required"],
        type: String,
        unique: [true, "name is used"]
    },
    password: {
        required: [true, "დასწერე პაროლი ახალგაზრდავ"],
        type: String
    }
})

const regUser = mongoose.model("regUser", ReguserSchema, "Users")

module.exports = regUser;