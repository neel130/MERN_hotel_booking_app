const mongoose = require("mongoose");


const roomSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
    room_no:{
        type:Array,
        require:true
    }
},{
    timestamps:true
});


const Room = mongoose.model("Room",roomSchema);

module.exports = Room ;