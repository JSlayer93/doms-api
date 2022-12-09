const database = require("../database/database")

exports.ShowUsers = async (req, res) =>{
    res.status(200).json({
        msg: (await database.getAll()).length,
        msg2: (await database.getAll())
    })
}