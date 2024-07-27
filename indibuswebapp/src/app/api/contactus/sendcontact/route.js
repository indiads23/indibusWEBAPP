import { connect } from "@/dbConfig/dbConfig.js";
import { Contact } from "@/models/contact.model.js";
const { NextResponse } = require("next/server");


connect()
export async function POST(request){
    const req =await request.json()
    const {name,email,phoneNumber,interest,message} = req.body
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
}