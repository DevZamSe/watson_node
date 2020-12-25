const data = require('./../config/credentials').Credentials.pgsql
const { Pool } = require('pg')

console.log(data);

const pool = new Pool(data)

function getConnection(){
    return pool.connect()
}

async function getProducts(){
    console.log('procesando')
    let client = await getConnection()
    console.log(client);
    // let query = 'select * from productos.productos'
    let query = `SELECT * FROM ${'Productos'}.${'Productos'}`
    let params = [];
    let response = await client.query(query, params)
    // client.release(true)
    console.log(response)
}

async function getProduct(id_product) {
    let client = await getConnection()
    let query = "select * from Productos where id = $1 limit 1"
    let params = [id_product]
    let responnse = await client.query(query, params)
    client.release(true)
    console.log(response)
}

getProducts()