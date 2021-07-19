const {Schema, model} = require('mongoose')
const md5 = require('md5')


let User = new Schema({
    //_id : Types.ObjectId,
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    registrationDate: {
        type: Date,
        required: true,
        default: Date.now //es automatica
    },
    confirmationDate: Date,
    confirmationToken: {
        type: String,
        required: true,
        default: function(){ //al momento que se generea el usuario, se generea el token
            return md5(Date.now())
        }
    },
})


// Ej.: statics, No hace falta crear la instancia
    // * User.findByToken()

User.statics.findByToken = function (token){
    return this.findOne({confirmationToken: token})
}

//Ej.: method, hay que crear la instancia en functions.js
    // * let user = new User({email:"ejemplo@ejemplo.com"})
    // * user.findByEmail()

User.methods.findByEmail = function (cb) {
    return model('User').find({email: this.email }, cb)
}

module.exports = model('User', User)