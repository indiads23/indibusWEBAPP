import { User } from "../models/user.model.js";
import { APIError } from "../utils/APIerror.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken"
export const verifyJWT = asyncHandler(async (req,res,next)=>{
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","")
        if(!token){
            throw new APIError(400,"Access Token can't be traversed")
        }

        const decodedInfo = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
        const user = await User.findById(decodedInfo?._id).select("-password -refreshToken")
        if(!user){
            throw new APIError(400,"Invalid Access Token")
        }
        req.user = user
        next()
    } catch (error) {
        throw new APIError(401,"Something went Wrong while validating User")
    }
})