const pg = require('pg')

const client = new pg.Client({
    database: 'cli_shopping_list',
    user: 'postgres',
    password: process.env.PASSWORDPH,
})

client.connect()

client.query('select * from list;', (err, res) => {
    let items = res.rows
    items.forEach(item => {
        console.log(item.items)
    })

    client.end()


})