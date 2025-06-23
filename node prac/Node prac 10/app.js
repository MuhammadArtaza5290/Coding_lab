const cookieParser = require('cookie-parser')
const express = require('express')
const app = express()
const path = require('path')
const userModel = require('./models/user')
const bcrypt = require('bcrypt')
const postModel = require('./models/post')
const jwt = require('jsonwebtoken')
const upload = require('./config/multerconfig')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.use(cookieParser())




app.get('/', (req, res)=>{
    res.render('index')
})
// ======================= Register ========================
app.post('/register', async (req, res)=>{
    let{username, name, password, email, age} = req.body;
    let user = await userModel.findOne({email: email})
    if(user){
        return res.status(500).send("User already registered.")
    }else{
        bcrypt.genSalt(10, function(err, salt){
            bcrypt.hash(password, salt, async function(err, hash){
                let createUser = await userModel.create({
                    username,
                    name,
                    password: hash,
                    email,
                    age
                })
                let token = jwt.sign({email: email, userid: createUser._id}, "shhhhhh")
                res.cookie('token', token)
                res.redirect('/profile')
            })
        })
    }
}) 

// ============== Login page rendring =================>
app.get('/loginPage', (req, res)=>{
    res.render('login')
})
// ====================== Login ====================>
app.post('/login', async (req, res)=>{
    let user = await userModel.findOne({email: req.body.email})
    if(!user){
        return res.status(500).send('Something went wrong.')
    }else{
        bcrypt.compare(req.body.password, user.password, function(err, result){
            if(result){
                let token = jwt.sign({email: user.email, userid: user._id}, 'shhhhhh')
                res.cookie('token', token)
                return res.status(200).redirect('/profile')
            }else{
                return res.status(500).send('Something went wrong.')
            }
        })
    }
})

//========================= Logout ============================
app.get('/logout', (req, res)=>{
    res.cookie('token', "")
    res.redirect('/loginPage')
})

// ========================= protected routes ===================== 
// ye ik middelware ha agr user login nahi to msg show krwana ke login kro is route pr ane ke liya.
// or agr login ha to us ke token sy main content nikalna and usy further routes me jo user login han un ko find krna ke liya use krna.
function isLoggedIn(req, res, next){
    if(req.cookies.token === ""){
        res.send('You must be login.')
    }else{
        let data = jwt.verify(req.cookies.token, 'shhhhhh');
        req.user = data;
        next()
    }
    
}

// user ke login hony ke bad us ki profile show krwai ha is route ke through
app.get('/profile', isLoggedIn , async (req, res)=>{
    let user = await userModel.findOne({email: req.user.email}).populate('post')
    // console.log(user);
    
    res.render('profile', {user})
    
})

// ab user jo post create kra ga us ko show krwana
app.post('/post', isLoggedIn, async (req, res)=>{
    let user = await userModel.findOne({email: req.user.email})
    let{content}= req.body;
    let post = await postModel.create({
        user: user._id,
        content,
    });
    // console.log(post);
    
    user.post.push(post._id)
    await user.save();
    res.redirect('/profile')
})

// ============== in this route we add like feature ==========
app.get('/like/:id',isLoggedIn, async (req, res)=>{
    let post = await postModel.findOne({_id: req.params.id}).populate("user")
    if (post.likes.indexOf(req.user.userid) === -1) {
        post.likes.push(req.user.userid);
    }else{
        post.likes.splice(post.likes.indexOf(req.user.userid), 1)
    }
    await post.save();
    res.redirect('/profile')  
})

// This is feed route means all posts are showing here

app.get('/feed', isLoggedIn, async (req, res)=>{
    let feed = await postModel.find().populate('user');
    // console.log(feed);
    res.render('feed', {feed: feed })
    
})

// this is edit route 

app.get('/edit/:id',isLoggedIn, async (req, res)=>{
    let post = await postModel.findOne({_id : req.params.id}).populate('user')
    res.render('edit', {post})
})

app.post('/update/:id', isLoggedIn, async (req, res)=>{
    let updatePost = await postModel.findOneAndUpdate({_id: req.params.id}, {content: req.body.content})
    res.redirect('/profile')
})

// this route is for profile picture sand
app.get('/profile/upload', (req, res)=>{
    res.render('profilepicture')
})

// app.post('/upload',isLoggedIn, upload.single('image') , async (req, res)=>{
//     let user = await userModel.findOneAndUpdate({_id: req.user.userid}, {profilepic: req.file.filename})
//     res.redirect('/profile')
// })
app.post('/upload',isLoggedIn, upload.single('image') , async (req, res)=>{
    let user = await userModel.findOne({email : req.user.email})
    user.profilepic = req.file.filename
    await user.save()
    res.redirect('/profile')
})

// This route is used to delete post

app.get('/delete/:id', isLoggedIn, async (req, res)=>{
    let user = await userModel.findOne({_id: req.user.userid});
    let index = user.post.indexOf(req.params.id)
    if (index !== -1) {
        user.post.splice(index, 1)
    }
    await user.save()
    let post = await postModel.findOneAndDelete({_id: req.params.id})
    res.redirect('/profile')
})

app.listen(3000)