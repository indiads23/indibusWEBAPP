import { connect } from "@/dbConfigContactInfo/dbConfig";
import User from "@/models/user.model";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'

connect()
export async function POST(request){
    const reqBody = await request.json()
    const {oldPassword, newPassword} = reqBody
    try {
        const userToken = request.cookies.get('token')?.value || '' 
        if(!userToken){
            return NextResponse.json({
                success:false,
                message:"Token not Found"
            })
        }

        const decodedToken = jwt.verify(userToken,process.env.ACCESS_TOKEN_SECRET)

        const user = await User.findById(decodedToken._id)

        if(!user){
            return NextResponse.json({
                success:false,
                message:"User not Find"
            })
        }
        //const validPassword = oldPassword === user.password
        const validPassword = await bcryptjs.compare(oldPassword,user.password)
        
        if(!validPassword){
            return NextResponse.json({
                success:false,
                message:"Password You Provided is wrong"
            })
        }
        const salt = await bcryptjs.genSalt(10)
        const hashPassword = await bcryptjs.hash(newPassword,salt)
        
        user.password = hashPassword
        const passwordChanged = await user.save()
        if(!passwordChanged){
            return NextResponse.json({
                success:false,
                message:"Something went wrong"
            })
        }

        return NextResponse.json({
            success:true,
            message:"Password Changed Successfully"
        })
    } catch (error) {
        console.log("Something Went wrong while changing the password: ",error.message);
        return NextResponse.json({
            message:"Something went wrong while Changing the password",
            success:false
        })
    }


}