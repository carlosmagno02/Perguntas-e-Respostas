const sequelize = require("sequelize")

const connection = new sequelize("perguntas",'root','BLACKdragon44',{
    host:'localhost',
    dialect:'mysql'
})

module.exports = connection;