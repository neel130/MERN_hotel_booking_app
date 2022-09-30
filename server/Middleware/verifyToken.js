const jwt = require('jsonwebtoken')
const User = require('../Models/userSchema')

exports.verifyToken = (req,res,next) =>{
    const cookie = req.cookies.jwTtoken
    try {
        if(!cookie){
            return res.status(400).json({error:"invalid token"})
        }
        jwt.verify(cookie, process.env.JWT_KEY, async(err, user)=> {
            if(err){
                return res.status(404).json({error:"invalid token"})
               }   
               const savedUser = await User.findById(user.id)
               req.user = savedUser ;
               next();
          })
    } catch (error) {
        console.log(`error ${error}`)
    }
}