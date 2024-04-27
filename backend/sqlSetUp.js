const mysql = require('mysql2/promise')

const db = mysql. createPool({
    host: "127.0.0.1",
    user:"root",
    password:"maneep2003M$",
    database:"team76"
})

module.exports = db;