const express = require("express");
const { createRoom } = require("../Controller/roomController");
const router = express.Router();

router.post('/create/:id',createRoom);


module.exports = router ;