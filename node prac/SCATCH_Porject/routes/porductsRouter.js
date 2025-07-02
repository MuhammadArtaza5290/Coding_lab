const express = require('express')
const router = express.Router()
const upload = require('../config/multer-config')
const productModel = require('../models/product-model')

router.post('/create', upload.single("image"), async function(req, res){
    try {
        let { name, price, discount, bgcolor, panelcolor, textcolor } = req.body;
    let product = await productModel.create({
        name,
        price,
        discount,
        bgcolor,
        panelcolor,
        textcolor,
        image:{
            data:req.file.buffer,
            contentType: req.file.mimetype
        } 
    })
    req.flash("success", "Product created. Successfully!")
    res.redirect('/owners/admin')
    } catch (error) {
        res.send(error.message)
    }
})

module.exports = router;