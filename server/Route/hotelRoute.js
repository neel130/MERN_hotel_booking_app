const express = require("express");
const { CreateHotel, getAllHotels, getSingleHotel, updateHotel } = require("../Controller/hotelController");
const router = express.Router();


router.post('/create',CreateHotel);
router.get('/find',getAllHotels);
router.get('/find/:id',getSingleHotel);
router.put('/update/:id',updateHotel);



module.exports = router ;