const Hotel = require("../Models/hotelSchema");
const Room = require("../Models/roomSchema");




exports.createRoom = async (req, res) => {
    const id = req.params.id;
    const { title, price, room_no } = req.body;
    try {
        if (!title || !price || !room_no) {
            return res.status(400).json({ error: "require all fields" })
        }
        const newRoom = await Room.create({
            title,
            price,
            room_no
        })
        if (newRoom) {
            await Hotel.findByIdAndUpdate(id, {
                $push: {
                    rooms: newRoom._id
                }
            }, {
                new: true
            })
        }

        return res.status(200).json({ success: "new room created successful", room: newRoom })

    } catch (error) {
        console.log(`error ${error}`)
    }
}