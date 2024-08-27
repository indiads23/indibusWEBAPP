import { Contact } from "@/models/contact.model";
import { NextResponse } from "next/server";
import { connect } from "@/dbConfigContactInfo/dbConfig";


export async function GET(){
    try {
        await connect()
        const contactInfo  = await Contact.find()
        if(!contactInfo){
            return NextResponse.json({
                success:false,
                message:"Data Fetching failed"
            },{status:500})
        }

        const response = NextResponse.json({
            message:"Successfully fetched Data",
            success:true,
            contactInfo
        },{status:200})

        return response
    } catch (error) {
        return NextResponse.json({
            success:false,
            message:`Something Went Wrong While Fetching Data of Contact Form ${error.message}`
        },{
            status:500
        })
    }
}