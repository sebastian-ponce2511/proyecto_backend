const router = require('express').Router()
const Brand = require('../schemas/Brand')


router.get('/', function(req, res){
    Brand.find()
    .exec()
    .then(function(brands){
        res.send(brands)
    })
    .catch(function(){
        res.send({message: 'error'})
    })
})


router.get('/:id', function(req, res){
    Brand.findById(req.params.id)
    .then(function(brand){
        res.send(brand)
    })
    .catch(function(){
        res.send({message: 'error'})
    })
})


router.post('/', function(req, res){
    let brand = new Brand(req.body)
    brand.save()
    .then(function(brand){
        res.send({message: brand._id})
    })
    .catch(function(){
        res.send({message: 'error'})
    })
})


router.patch('/:id', function(req, res){
    Brand.findByIdAndUpdate(req.params.id, req.body)
    .then(function(){
        res.send({message: 'updated'})
    })
    .catch(function(){
        res.send({message: 'error'})
    })
})


router.delete('/:id', function(req, res){
    Brand.deleteOne({_id : req.params.id})
    .then(function(){
        res.send({message: 'deleted'})
    })
    .catch(function(){
        res.send({message: 'error'})
    })
})


module.exports = router