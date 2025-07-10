const express = require('express')
const router = express.Router()
const userModel = require('../models/user-model')


router.post('/submit', async (req, res)=>{
    let{name, email, phone} = req.body;
  let userCreated = await userModel.create({
    name,
    email,
    phone
  })
  res.send(userCreated)
})

router.get('/read', async (req, res)=>{
    let user = await userModel.find();
    res.send(user)
})

module.exports = router