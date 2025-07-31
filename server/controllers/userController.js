//GET /api/user/

export const getUser = async (req,res)=>{
    try{
        const role = req.user.role;
        const recentSearchCities = req.user.recentSearchedCities

    }catch(error){
        res.json({success:false,message:error.message});

    }
}

export class getUserData {
}