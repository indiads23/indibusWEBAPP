import { connect } from "@/dbConfig/dbConfig.js";
import { Contact } from "@/models/contact.model.js";
const { NextResponse } = require("next/server");


connect()
export async function POST(request){
   try {
     const reqBody =await request.json()
     const {name,email,phoneNumber,interest,message} = reqBody
     console.log(name,email,phoneNumber,interest,message);
     console.log(reqBody);
 
     const newContact = new Contact({
         name:name,
         email:email,
         phoneNumber:phoneNumber,
         interest:interest,
         message:message
     })
 
     const savedContactDetails = await newContact.save()
 
     return NextResponse
     .json({
         message:"Message Recorded Successfully",
         success:true,
         savedContactDetails
     })
   } catch (error) {
     return NextResponse.json({
        message:error.message,
        success:false
     })
   }
}