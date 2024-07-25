import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { APIError } from "../utils/APIerror.js";
import { APIresponse } from "../utils/APIresponse.js";

const generateAccessTokenAndRefreshToken = async(userId)=>{
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()
        
        user.refreshToken = refreshToken
        await user.save({validateBeforeSave:false})

        return {accessToken,refreshToken}
    } catch (error) {
        throw new APIError(400,"Something gone wrong while Generating Access Token and Refresh Token")
    }
}

const registerUser = asyncHandler(async(req,res)=>{
    const {username,email,fullname,password} = req.body

    console.log(email,username,fullname)
    if(
        [fullname,email,username,password].some((field)=> field?.trim() === "")
    ){
        throw new APIError(400,"No Empty Field is allowed")
    }
    console.log(email,username,fullname)
    const userExist =await User.findOne({
        $or: [{username},{email}]
    })
    console.log(email,username,fullname)
    if(userExist){
        throw new APIError(400,"This Email has been used by another User")
    }
    let avatarLocalPath
    if(req.files && Array.isArray(req.files.avatar) && req.files.avatar.length > 0){
        avatarLocalPath = req.files.avatar[0].path
    }
    console.log(avatarLocalPath);
    const avatar = await uploadOnCloudinary(avatarLocalPath)

    const user = await User.create({
        fullname,
        avatar:avatar?.url || "",
        email,
        password,
        username:username.toLowerCase()
    })

    const userCreated = await User.findById(user._id).select("-password -refreshToken")

    if(!userCreated){
        throw new APIError(500,"Something went wrong while Creating User")
    }

    return res.status(200).json(
        new APIresponse(
            200,userCreated,"User Registered Successfully"
        )
    )

})

const loginUser = asyncHandler(async (req,res)=>{
    const {email,username,password} = req.body
    
    if(!(username || email)){
        throw new APIError(400,"All fields are Required")
    }

    const user  = await User.findOne({
        $or:[{username},{email}]
    })
    if(!user){
        throw new APIError(402,"User not Find")
    }

    const isPasswordValid = await user.isPasswordCorrect(password)

    if(!isPasswordValid){
        throw new APIError(401,"Password or Email is Incorrect")
    }

    const {accessToken,refreshToken} = await generateAccessTokenAndRefreshToken(user._id)

    const loggedUser = await User.findById(user._id).select("-password -refreshToken")

    const options = {
        httponly:true,
        secure:true
    }
    
    return res
    .status(200)
    .cookie("accessToken",accessToken,options)
    .cookie("refreshToken",refreshToken,options)
    .json(
        new APIresponse(
            200,
            {
                user:loggedUser,accessToken,refreshToken
            },
            "User Logged in Successfully"
        )
    )
})

const logoutUser = asyncHandler(async (req,res)=>{
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set:{
                refreshToken:undefined
            }
        },
        {
            new: true
        }
    ) 

    const options = {
        httpOnly:true,
        secure:true
    }
    return res
    .status(200)
    .clearCookie("accessToken")
    .clearCookie("refreshToken")
    .json(new APIresponse(200,{},"User Logged Out"))
})

const refreshAccessToken = asyncHandler(async (req,res)=>{
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken

    if (!incomingRefreshToken){
        throw new APIError(401,"Unauthorized request")
    }

    try {
        const decodedRefreshToken = jwt.verify(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECTRET
        )
    
        const user = await User.findById(decodedRefreshToken?._id)
    
        if(!user){
            throw new APIError(401,"Invalid Refresh Token")
        }
    
        if(incomingRefreshToken !== user?.refreshToken){
            throw new APIError(401,"Refresh token is expired or used")
        }
    
        const options = {
            httpOnly:true,
            secure:true
        }
    
        const {accessToken,newRefreshToken} = await generateAccessTokenAndRefreshToken(user._id)
    
        return res
        .status(200)
        .cookies("accessToken",accessToken,options)
        .cookies("refreshToken",newRefreshToken,options)
        .json(
            new APIresponse(200,{accessToken,refreshToken:newRefreshToken},"Access Token Refreshed")
        )
    } catch (error) {
        throw new APIError(401,error?.message||"Invalid Refresh Token")
    }
})

const updateUserPassword = asyncHandler(async (req,res)=>{
    const {oldPassword,newPassword} = req.body

    if(!(oldPassword || newPassword)){
        throw new APIError(400,"All Fields Required")
    }

    const user = await User.findById(req.user?._id)
    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword)

    if(!isPasswordCorrect){
        throw new APIError(400,"Wrong Password")
    }

    user.password = newPassword
    user.save({validateBeforeSave:false})

    return res
    .status(200)
    .json(
        new APIresponse(
            200,
            {},
            "Password Changed Successfully"
        )
    )

})

const getCurrentUser = asyncHandler(async (req,res)=>{
    return res
    .status(200)
    .json(200,req.user,"User Fetched Successfully")
})

const updateAccountDetails = asyncHandler(async (req,res)=>{
    const {fullname,email} = req.body
    if(!(fullname||email)){
        throw new APIError(400,"Each Fields is Required")
    }

    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set:{
                fullname,
                email:email
            }
        },
        {
            new:true
        }
    ).select("-password -refreshToken")

    return res
    .status(200)
    .json(
        new APIresponse(
            200,
            user,
            "Account Details Updated"
        )
    )
})

const updateAvatar = asyncHandler(async (req,res)=>{
    const avatarLocalPath = req.file?.path
    
    if(!avatarLocalPath){
        throw new APIError(400,"Avatar File Path not found")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    if(!avatar){
        throw new APIError(400,"Avatar Generation Failed")
    }

    await User.findById(req.user?._id,
        {
            $set:{
                avatar:avatar?.url
            }
        },
        {
            new:true
        }
    ).select("-password -refreshToken")

    return res
    .status(200)
    .json(new APIresponse(200,{},"Avatar updated Successfully"))
})

export {
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    updateUserPassword,
    getCurrentUser,
    updateAccountDetails,
    updateAvatar
}