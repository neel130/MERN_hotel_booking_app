const User = require("../Models/userSchema");
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')

// SIGNUP 
exports.signupUser= async (req,res) =>{
    const {username,email,password} = req.body;
    try {
        if(!username || !email || !password){
            return res.status(404).json({error:"please add all fields"})
        }
        const savedUser = await User.findOne({email});
        if(savedUser){
            return res.status(404).json({error:"email id already exists"})
        }
        const hashedPassword = bcrypt.hashSync(password, 10);
        const user = await User.create({
            username,
            email,
            password:hashedPassword
        })
        return res.status(201).json({success:"signup successful",user})
    } catch (error) {
        console.log(`error ${error}`)
    }
}


// LOGIN 
exports.loginUser = async (req,res) =>{
      const {email,password} = req.body ;
    try {
         if(!email || !password){
            return res.status(400).json({error:"require all fields"})
         }
         const savedUser = await User.findOne({email})
         if(!savedUser){
            return res.status(400).json({error:'no user found'})
         }
        const comparePassword = bcrypt.compareSync(password, savedUser.password);  
        if(!comparePassword){
            return res.status(404).json({error:"incorrect password"})
        }
        const token = jwt.sign({id:savedUser._id},process.env.JWT_KEY)
        // const {username,...data} = savedUser
        // console.log(data)
        delete savedUser._doc.password;
        return res.cookie("jwTtoken", token).status(200).json({success:"login user successful",user:savedUser})  
    } catch (error) {
        console.log(`error ${error}`)
    }
}

 
//LOGOUT
exports.logoutUser = async(req,res) =>{
    try {
        res.clearCookie("jwTtoken",{path:"/"});
        res.status(200).json({success:"Logout successful"})
    } catch (error) {
        console.log(`error ${error}`)
    }
}