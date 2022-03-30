const express = require('express')
const app = express()
const path = require('path')
const faker = require('faker')
const db_connection = require('./config/db')
const normalizar = require('./services/compression')

const {Server : IOServer} = require('socket.io')
const {Server : HttpServer} = require('http')

const messages = []

const server = new HttpServer(app)
const io = new IOServer(server)

const msgModel = require('./config/mongooseDB')

db_connection()

let id = 0

const getMsg = async () => {
    const msgsDB = await msgModel.find({})
    let {normalizado_Mensajes, denormalizedData, mensajesSchema} = normalizar(msgsDB)
    return {normalizado_Mensajes, denormalizedData, mensajesSchema, compressedPercentage}
}
//getMsg()



io.on('connection', async (socket)=>{
    /*const dataToNormalize = await getMsg()
    console.log('data normalizada', dataToNormalize)*/
    const msgsDB = await msgModel.find({})

    socket.emit('server:loadmessages', msgsDB)
    socket.on('client:newmessage', async (data) => {
        console.log('socket')
        id++
        const message = {
            author: {
                name: data.name,
                email: data.email,
                surname: data.surname,
                edad: data.edad,
                alias: data.alias
            },
            message: data.message,
            date: new Date().toLocaleString(),
            id
        }
        console.log(message)
        messages.push(message)
        await msgModel.create(message)
        io.sockets.emit('server:newmessage', message)
    })
})

const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/", express.static(path.join(__dirname + '/public')))


app.get('/', (req, res) => {
    console.log('entra en get')
    res.render('index')
})
app.set('view engine', 'ejs')
app.set('views', './public')


app.get('/faker-test', (req, res) => {
    let productos = []
    for (i = 0; i<5; i++){
        let product = {
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            image: faker.image.image()
        }
        productos.push(product)
    }
    res.render('faker', {productos:productos})
})

server.listen(PORT, ()=> {
    console.log(`Estas conectado a http://localhost:${PORT}`)
})

