import Hotel from '../models/Hotel.js';

//api to create a new room for a hotel

export const createRoom =async (req,res) => {
    try{
        const{roomType , pricePerNight , amenities} = req.body;
        const hotel = await Hotel.findOne({owner: req.auth.userId});

        if(!hotel){
            return res.json({success:false,message:"Hotel not found"});
        }
    }
    catch(error){
        console.log(error.message);
    }

}

//api to get all rooms

export const getRooms =async (req,res) => {

}

//api to get all rooms for a specific hotel

export const getOwnerRooms =async (req,res) => {

}

//api to toggle availability

export const toggleRoomAvailability =async (req,res) => {

}

