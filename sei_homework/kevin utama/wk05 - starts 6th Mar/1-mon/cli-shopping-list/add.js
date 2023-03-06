const pg = require('pg')

const client = new pg.Client({
    database: 'cli_shopping_list',
    user: 'postgres',
    password: process.env.PASSWORDPH,
})

client.connect()

client.query("insert into list (items) values('cheese');", (err, res) => {

    client.end()
})