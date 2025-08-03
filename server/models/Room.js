import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
    roomType: {type: String, required: true},
    pricePerNight: {type: Number, required: true},
    amenities: {type: String, required: true},
    description: {type: Array, required: true},
    image: {type: String},
    hotel: {type: String, ref: 'Hotel', required: true},

},{timestamps: true});

const Room = mongoose.model('Room', roomSchema);

export default Room;