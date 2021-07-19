const router = require('express').Router()
const path = require('path')
const User = require('../schemas/User')
const nodemailer = require('nodemailer')

router.get('/register', function(req, res){
    // devolver un formulario html
    let file = path.resolve('src', 'views', 'register.html')
    // src/views/register.html (ruta local)
    
    res.sendFile(file)
    
}) 

// http://localhost:4000/confirm?token=asdfghhjk   -- la parte despues de ? = query string
router.get('/confirm', function(req, res){

    User.findByToken(req.query.token)
      .then(function(result){
        if (result){
        return res.send('confirmado')
        }

        return res.send('No se encontro el usuario')
      })

      .catch(function(err){
        console.log(err.message) // Muestra el error en la consola
        return res.send('error') 
      })

    
})


router.post('/register',async function(req, res){

    let user = new User(req.body) //req.body es toda la info del formulario: mail y pass

    user.save().then(async u => {
      let testAccount = await nodemailer.createTestAccount();
    
      let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: testAccount.user, // generated ethereal user
          pass: testAccount.pass, // generated ethereal password
        },
        tls:{
            rejectUnauthorized:false
        }
      });

      let info = await transporter.sendMail({
        from: '"Backend 👻" <no-reply@pixelcult.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Registro exitoso!", // Subject line
        text: "Bienvenido al sistema de registro", // plain text body
        html: `
        <a href="http://localhost:4000/confirm?token=${u.confirmationToken}">
        Confirmar cuenta
        </a>

        <b>Bienvenido a nuestro sistema</b>
        `, 
      });


    console.log("Message sent: %s", info.messageId);

    res.send(nodemailer.getTestMessageUrl(info))

    }).catch(err => {
      console.log(err)
      return res.send('error')
    })
    
    //let token = md5('message' + Date.now())

    //console.log(token)

    

    
})

module.exports = router