const express = require("express");
const { updateUser } = require("../Controller/userController");
const { verifyToken } = require("../Middleware/verifyToken");
const router = express.Router();


router.put('/update/:id',verifyToken,updateUser)

module.exports = router