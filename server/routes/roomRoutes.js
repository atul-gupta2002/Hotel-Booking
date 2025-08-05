import express from 'express';
import upload from "../middleware/uploadMIddleware.js";
import {protect} from "../middleware/authMiddleware.js";
import {createRoom, getOwnerRooms, getRooms, toggleRoomAvailability} from
        "../controllers/roomController.js";

const roomRouter = express.Router();

roomRouter.post("/",upload.array("images",4),protect,createRoom);
roomRouter.get("/",getRooms);
roomRouter.get("/owner",protect,getOwnerRooms);
roomRouter.post("/toggle-availability",protect,toggleRoomAvailability);
//we will send the data from the body that's why we are using post
export default roomRouter;