import User from '../models/User.js';
import user from "../models/User.js";


//middleware to check if user is authenticated
export const protect = async (req, res, next) => {
    const {userId} = req.auth;
    if(!userId){
        res.json({success:false,message:"User not authenticated"})
    }else{
        const User = await User.findById(userId);
        req.user = user;
        next();
    }
}

