const router = require('express').Router()
const Category = require ('../schemas/Category')


// http:localhost:4000/categories
router.get('/', function(req, res){

    //mostrar listado de todas las categorias
    Category.find()
        .exec() // ejecutamos la busqueda
        .then(function(categories){ // se encuentra y se muestra el array de categorias
            res.send(categories)
        })
        .catch(function(){
            res.send({message: "error"})
        })
    
})


// http:localhost:4000/categories/123
router.get('/:id', function (req, res){
    // mostrar detalle de la categoria con el id de la url
    Category.findById(req.params.id) //url
    .then(function(category){ //Cuando se obtiene el resultado se invoca la función, la base de datos le pasa a la función la categoria y esta se muestra en la respuesta
        res.send(category)
    })
    .catch(function(){
        res.send({message: "error"})
    })
    
})


// http:localhost:4000/categories
router.post('/', function (req, res){ 
    // enviar el id de la base de datos

    let category = new Category(req.body) // req.body Se recibe info del formulario

    category.save() // Se crea la categoria y se guarda
    .then(function(category){ // Recibo el resultado (categoria actualizada)
        res.send({message: category._id})
    })
    .catch(function(){
        res.send({message: "error"})
    })
    
})

// http:localhost:4000/categories/123
router.patch('/:id', function (req, res){  // RECIBO INFO
    // enviar mensaje de confirmacion si los datos se modifican
    Category.findByIdAndUpdate(req.params.id, req.body) // re.params.id me da el id.. {} devuelve un objeto con los cambios
        .then(function(){
            res.send({message: "updated"})
        })
        .catch(function(){
            res.send({message: "error"})
        })
   
})

router.delete('/:id', function (req, res){  // RECIBO INFO
    // enviar mensaje de confirmacion si los datos se borran

    Category.deleteOne({_id : req.params.id})
        .then(function(){
            res.send({message: "deleted"})
        })
        .catch(function(err){
            console.log(err)
            res.send({message: "error"})
        })

    
})

module.exports = router