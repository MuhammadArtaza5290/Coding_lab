const express = require('express')
const app = express()
const path = require('path')
const userModel = require('./models/user')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/read', async (req, res)=>{
    let readUser = await userModel.find()
    res.render('read', {users: readUser})
})
app.get('/edit/:userid', async (req, res)=>{
    let editUser = await userModel.findOne({_id: req.params.userid})
    // console.log(editUser);
    
    res.render('edit', {users: editUser})
})

app.post('/create', async (req, res)=>{
    
    let{name, email, imgUrl} = req.body;
   let userCreated = await userModel.create({
        name,
        email, 
        imgUrl
    })
    res.redirect('/read')
})

app.get('/delete/:id', async (req, res)=>{
    let deleteUser = await userModel.findOneAndDelete({_id: req.params.id})
    res.redirect('/read')
})

app.post('/update/:userid', async (req, res)=>{
    let{name, email, imgUrl} = req.body
    console.log(req.body);
    
    let updateUser = await userModel.findOneAndUpdate({_id: req.params.userid}, {name, email, imgUrl}, {new: true})
    res.redirect('/read')
})

app.listen(3000)