const mongoose = require('mongoose')


const ownerSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password: String,

    isadmin: Boolean,
    products: {
        type: Array,
        default: []
    },
    picture: String,
    gstno: String
})


module.exports = mongoose.model('owner', ownerSchema)