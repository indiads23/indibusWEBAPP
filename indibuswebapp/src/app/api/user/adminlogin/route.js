import { connect } from "@/dbConfigContactInfo/dbConfig";
import User from "@/models/user.model";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
connect()
export async function POST(request){
    const reqBody = await request.json()

    const {email,phoneNumber,password} = reqBody

    if(!(phoneNumber || email)){
        return NextResponse.json({
            message:"All Field  is Required",
            success:false
        },{status:400})
    }else if(!password){
        return NextResponse.json({
            message:"Password Required",
            success:false
        },{staatus:400})
    }
    try {
        const user = await User.findOne({
            $or:[{email}||{phoneNumber}]
        })
        if(!user){
            return NextResponse.json({
                message:"User Not found",
                success:false
            },{status:400})
        }
        //const isPasswordCorrect = password === user.password
        const isPasswordCorrect = await bcryptjs.compare(password,user.password)

        if(!isPasswordCorrect){
            return NextResponse.json({
                message:"Incorrect Password",
                success:false
            },{status:400})
        }

        const tokenData = {
            _id:user._id,
            name:user.name,
            email:user.email,
            phoneNumber:user.phoneNumber,
            password:user.password
        }

        const token = jwt.sign(tokenData,process.env.ACCESS_TOKEN_SECRET,{expiresIn:process.env.ACCESS_TOKEN_EXPIRY})
        const response = NextResponse.json({
            message:"Login Successfull",
            success:true
        },{status:200}) 
        response.cookies.set('token',token,{
            httpOnly:true
        })

        return response
    } catch (error) {
        console.log("Something Went wrong While Logging in: ", error.message);
        return NextResponse.json({
            message:"Something Went Wrong while Logging In",
            success:false
        },{status:500})        
    }
}
