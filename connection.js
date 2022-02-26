const { Client } = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Swaroop@123",
    database: "calculatordb"
})

module.exports = client;