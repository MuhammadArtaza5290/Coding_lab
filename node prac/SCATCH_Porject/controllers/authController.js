const userModel = require('../models/user-model')
const bcrypt = require('bcrypt')
const cookieParser = require('cookie-parser')
const {generateToken} = require('../utils/generateToken')

module.exports.registerUser = async function(req, res){
    try {
        let{ fullname, email, password } = req.body;
        let user = await userModel.findOne({email})
        if (user) {
            req.flash('error', 'You already registered, Please login!')
           return res.redirect('/')
            
        }
        
        bcrypt.genSalt(10, function(err, salt){
            bcrypt.hash(password, salt, async function(err, hash){
                if (err) {
                    return res.send(err.message)
                } else {

                       let user = await userModel.create({
                        fullname,
                        email,
                        password: hash
                    })
                    let token = generateToken(user)
                    res.cookie('token', token)
                    res.redirect('/shop')
                };
                
            })
        })
        
 
    } catch (error) {
        res.send(error.message);
        
    }

}

module.exports.loginUser = async function(req, res){
    try {
        let {email, password} = req.body;
         let user = await userModel.findOne({email: email})
         if (!user) {
            req.flash('error', 'Email or Password is incorrect.')
            return res.redirect('/')
         }
            bcrypt.compare(password , user.password , function(err, result){
                if(result == true){
                    let token = generateToken(user)
                    res.cookie('token', token)
                    return res.status(200).redirect('/shop')
                }else{
                    req.flash('error', 'Email or Password is incorrect.')
                    return res.redirect('/')
                }
            })

         
    } catch (error) {
        res.send(error.message)
    }
}

module.exports.logoutUser = function(req, res){
    res.cookie("token", "")
    req.flash('error','You are logout')
    return res.redirect('/')
}