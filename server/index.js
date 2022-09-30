const express = require('express');
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv');
dotenv.config();
const connectDatabase = require('./MongoDB/connection');
connectDatabase();
const app = express();

// Middlewares 
app.use(express.json());
app.use(cookieParser());


// importing routes 
const authRoute = require('./Route/authRoute');
const userRoute = require('./Route/userRoute');
const hotelRoute = require('./Route/hotelRoute');
const roomRoute = require('./Route/roomRoute');



// ROUTES 
app.use('/auth',authRoute);
app.use('/user',userRoute);
app.use('/hotel',hotelRoute);
app.use('/room',roomRoute);




app.listen(process.env.PORT,()=>{
    console.log(`server is running on port no ${process.env.PORT}`)
})