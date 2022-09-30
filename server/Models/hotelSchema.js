const mongoose = require("mongoose");


const hotelSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    type:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    photos:{
        type:Array,
        require:true
    },
    desc:{
        type:String,
        require:true
    },
    rooms:{
        type:Array,
    }
});


const Hotel = mongoose.model("Hotel",hotelSchema);
module.exports = Hotel ;