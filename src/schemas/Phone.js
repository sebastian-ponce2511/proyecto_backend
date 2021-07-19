const mongoose = require('mongoose')

let Phone = new mongoose.Schema({
    //_id: Types.ObjectId,
    countryCode: String,
    areaCode: String,
    number: String,
     userId: {
         type: mongoose.Types.ObjectId, 
         ref: "User"
     }

})

module.exports = mongoose.model('Phone', Phone)