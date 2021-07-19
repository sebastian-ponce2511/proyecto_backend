const router = require('express').Router()
const User = require('../schemas/User')

router.get('/', function(req, res){
    User.find()
    .exec()
    .then(function(user){
        res.send(user)
    })
    .catch(function(){
        res.send({message: 'error'})
    })
})


router.get('/:id', function(req, res){
    User.findById(req.params.id)
    .then(function(user){
        res.send(user)
    })
    .catch(function(){
        res.send({message: 'error'})
    })
})


router.post('/', function(req, res){
    let user = new User(req.body)
    user.save()
    .then(function(user){
        res.send({message: user._id})
    })
    .catch(function(){
        res.send({message: 'error'})
    })
})


router.patch('/:id', function(req, res){
    User.findByIdAndUpdate(req.params.id, req.body)
    .then(function(){
        res.send({message: 'updated'})
    })
    .catch(function(){
        res.send({message: 'error'})
    })
})


router.delete('/:id', function(req, res){
    User.deleteOne({_id : req.params.id})
    .then(function(){
        res.send({message: 'deleted'})
    })
    .catch(function(){
        res.send({message: 'error'})
    })
})


module.exports = router