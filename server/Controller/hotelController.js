const Hotel = require("../Models/hotelSchema");

// CREATE HOTELS 
exports.CreateHotel = async (req,res) =>{
    const {name,type,city,address,photos,desc,rooms} = req.body ;
    try {
        if(!name || !type || !city || !address || !photos || !desc ){
            return res.status(404).json({error:"all fields are required"})
        }
        const newHotel = await Hotel.create({
            name,
            type,
            city,
            address,
            photos,
            desc,
            rooms
        });
        return res.status(201).json({success:"new hotel created successful",hotel:newHotel})
    } catch (error) {
        console.log("error"+error)
    }
}


// GET ALL HOTELS 
exports.getAllHotels = async (req,res)=>{
    const city = req.query.city;
    let hotels ;
    console.log(city)
    try {
        if(city){
            hotels = await Hotel.find({city});
        }else{
            hotels = await Hotel.find();
        }
        
        if(!hotels){
            return res.status(404).json({error:"no hotels found"});
        }
        return res.status(200).json({success:"finding hotels successful",hotels})
    } catch (error) {
        console.log("error"+error)
    }
}


// GET SINGLE HOTEL 
exports.getSingleHotel = async (req,res) =>{
    const id = req.params.id;
    try {
        if(!id){
            return res.status(404).json({error:"no id found"});
        }
        const hotel = await Hotel.findById(id)
       return res.status(200).json({success:"finding hotel successful",hotel})        
    } catch (error) {
        console.log('error'+error)
    }
}


// UPDATE HOTEL 
exports.updateHotel = async (req,res) =>{
    const id = req.params.id;
    const {name,type,city,adress,desc,rooms} = req.body
    try {
        if(!id){
            return res.status(404).json({error:"no id found"});
        }
        const updatedhotel = await Hotel.findByIdAndUpdate(id,{
            $set:{
               name,
               type,
               city,
               adress,
               desc,
               rooms
            }
        },
        {
            new:true
        }
        );
        return res.status(200).json({success:"hotel updated successfuly",hotel:updatedhotel});
    } catch (error) {
        console.log("error"+error)
    }
}