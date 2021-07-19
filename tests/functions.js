const User = require('../src/schemas/User')
const Address = require('../src/schemas/Address')
const Profile = require('../src/schemas/Profile')
const Product = require('../src/schemas/Product')
const Comment = require('../src/schemas/Comment')
const Phone = require('../src/schemas/Phone')



module.exports = {

    findUsers(){

    // let user = new User({email:"tres@gmail.com"})

    // user.findByEmail()
    // .then(u => console.log(u))
    // .catch(err => console.log(err))
    

     User.findByToken('e2288527ac41a8f141925b1150eadff3')
     .then(u => console.log(u))
     .catch(err => console.log(err))
    },
    
    
    createUser(){ //Crear Usuarios
        // new = instancia
        let newUser = new User({email: "qwerty@asd.com", password: "asdfghjkl"})

        // metodo de instancia
        newUser.save()
            .then(user => {
                console.log('el ID del usuario es: '+user._id) 
            }) 
            .catch(err =>{
                console.error(err) 
            }) 
        },

    // findUsers(){ //Buscar Usuarios
    //     User.find().then(users => {
    //         console.log(users)
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // },

    

    createAddress(){ //Crear Direcciónes
        let newAddress = new Address({
            country: 'Argentina',
            city: 'Buenos Aires',
            street: 'Calle falsa 123',
            zipcode: 1427,
        })

        newAddress.save()
            .then(address => {
                console.log('el ID de la direccion es: '+address._id) 
            }) 
            .catch(err =>{
                console.error(err) 
            }) 
        },

    findAddress(){ // Buscar Direcciónes
        Address.find().then(address => {
            console.log(address)
        }).catch(err => {
            console.log(err)
        })
    },

    createProfile(){ // Crear perfiles
        let newProfile = new Profile({
            firstName: 'Homero',
            lastName: 'Thompson',
            birthDate: new Date (1986,10,25)
            
        })

        newProfile.save()
        .then(profile => {
            console.log('el ID del perfil es: '+profile._id)
        })
        .catch(err => {
            console.log(err)
        })

    },

        findProfile(){ // Buscar Perfiles
            Profile.find().then(profile => {
                console.log(profile)
            }).catch(err => {
                console.log(err)
            })
        },
    
    createProduct(){ // Crear productos
        let newProduct = new Product({
            name: 'Remera Mario Bros',
            price: 999,
            aggregaterating: 0,
            stock: 100,
            category: 'Remeras'
        })

        newProduct.save()
        .then(product => {
            console.log('el ID del producto es: '+product._id)
        }).catch(err => {
            console.log(err)
        })
    },

    findProduct(){ // Buscar Productos
        Product.find().then(product => {
            console.log(product)
        }).catch(err => {
            console.log(err)
        })
    },

    createComment(){ // Crear Comentarios
        let newComment = new Comment({
            body: 'Esto es un comentario',
            dislikesCount: 0,
            likesCount: 0,
        })

        newComment.save()
        .then(comment => {
            console.log('el ID del comentario es: ' +comment._id)
        }).catch(err => {
            console.log(err)
        })
    },

    findComment(){ // Buscar Comentarios
        Comment.find().then(product =>{
            console.log(comment)
        }).catch(err =>{
            console.log(err)
        })
    },

    createPhone(){ // Crear Teléfono
        let newPhone = new Phone({
            countryCode: 0054,
            areaCode: 011,
            number: 12345678
        })

        newPhone.save()
        .then(phone =>{
            console.log('el ID del teléfono es: ' +phone._id)
        }).catch(err=>{
            console.log(err)
        })
    }
        

}