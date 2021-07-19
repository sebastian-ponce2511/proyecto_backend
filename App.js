const mongoose =require ('mongoose')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const authRouter = require ('./src/routes/auth')
mongoose.connect('mongodb://localhost:27017/proyecto_ecommerce', {useNewUrlParser: true, useUnifiedTopology: true});
const categoriesRouter = require ('./src/routes/categories')
const addressesRouter = require ('./src/routes/addresses')
const phonesRouter = require ('./src/routes/phones')
const productsRouter = require('./src/routes/products')
const usersRouter = require('./src/routes/users')
const profilesRouter = require('./src/routes/profiles')
const brandsRouter = require('./src/routes/brands')
const Product = require('./src/schemas/Product')
const cors = require('cors')

app.use(cors()) // valida las peticiones. Debe ir siempre primero
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


//API REST
app.use('/api/auth', authRouter) // Todas las rutas definidas dentro de authRouter, llevan /auth
app.use('/api/categories', categoriesRouter)
app.use('/api/addresses', addressesRouter)
app.use('/api/phones', phonesRouter)
app.use('/api/products',productsRouter)
app.use('/api/users',usersRouter)
app.use('/api/profiles',profilesRouter)
app.use('/api/brands', brandsRouter)

app.get('/', function(req, res){ //Ruta raiz
    res.send('Bienvenido a backend')
})

app.get('/products', function(req, res){   // Listado e productos
    
})

app.get('/products/create', function(req, res){   // Mostrar formulario de alta de productos
    res.sendFile(__dirname + '/src/views/products-create.html')
})

app.post('/products', function(req, res){   // Recibir datos del formulario. Guardar en la base de datos
    //guardar en la base de datos
    let newProduct = new Product(req.body)
    newProduct.save()
    .then(function(){
        res.status(201).send({message: 'created'})
    })
    .catch(function(err){
        console.log(err)
        res.status(422).send({message: err})
    })
    
})

//request, response
//Request: Va a tomar la info de la petición que esta llegando (info de lectura) (ej: IP del usuario, datos de fomulario)
//Response: respuesta a la petición (String, HTML, archivo descargable, etc.)


// http://localhost:4000/ Nos lleva a lo que hay en la ruta raiz
app.listen(4000) //




//GET http://localhost:3000/register
//POST http://localhost:3000/register

















