const router = require('express').Router()
const Product = require('../schemas/Product')

router.get('/', function(req, res){

    let query = {}

    if(req.query.brand){
        query.brand = req.query.brand
    }

    if(req.query.price_min){
        query["$and"] = [
            {
                price: {
                    "$gte": req.query.price_min
                    }
            },
            {
                price: {
                    "lte": req.query.price_max
                    }
            }
        ]
    }

    let result = Product.find(query)

    //order=price&dir=asc
    if (req.query.order){ // Si la query tiene el parametro order, se ejecuta sort
        result.sort({[req.query.order] : req.query.dir === 'asc' ? 1 : -1})
    } //para tomar un dato dinamico (price,title,etc) dentro de un json, se pone entre []

    result.then(results =>{
        res.send(results)
    })
    .catch(err =>{
        console.log(err)
        res.send({message: 'error'})
    })
})


router.get('/:id', function(req, res){
    Product.findById(req.params.id)
    .then(function(product){
        res.send(product)

        product.views_count = product.views_count+1  //view_counts
        product.save()
        .then(function(product){
            res.semd(product)
        })
    })
    .catch(function(){
        res.send({message: 'error'})
    })
})


router.post('/', function(req, res){
    let product = new Product(req.body)
    product.save()
    .then(function(product){
        res.send({message: product._id})
    })
    .catch(function(){
        res.send({message: 'error'})
    })
})


router.patch('/:id', function(req, res){
    Product.findByIdAndUpdate(req.params.id, req.body)
    .then(function(){
        res.send({message: 'updated'})
    })
    .catch(function(){
        res.send({message: 'error'})
    })
})


router.delete('/:id', function(req, res){
    Product.delete({_id : req.params.id})
    .then(function(){
        res.send({message: 'deleted'})
    })
    .catch(function(){
        res.send({message: 'error'})
    })
})


module.exports = router