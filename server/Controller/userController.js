const User = require("../Models/userSchema")




exports.updateUser = async(req,res) =>{
    const id = req.params.id
    const {username}= req.body
    try {
        if(req.user._id != id){
            return res.status(400).json({error:"you are not authorized"})
        }
        if(!username){
            return res.status(404).json({error:"require all fields"})
        }
        const updateuser = await User.findByIdAndUpdate(id,{
            $set:{username}
        },{
            new:true
        })
        
        return res.status(200).json({success:"update successful",updateuser})
    } catch (error) {
        console.log(`error ${error}`)
    }
}