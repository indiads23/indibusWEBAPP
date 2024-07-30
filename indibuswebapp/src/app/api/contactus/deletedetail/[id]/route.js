import { connect } from "@/dbConfigContactInfo/dbConfig"
import { Contact } from "@/models/contact.model"
import { NextResponse } from "next/server";

connect()

export async function DELETE(request,{param}){
    try {
        const id = param
        await Contact.findByIdAndDelete(id)
        return NextResponse.json({
            message:"Deletion Completed",
            success:true
        },{status:200})
    } catch (error) {
        return NextResponse.json({
            message:"Deletion Failed",
            success:false
        },{status:500})
    }
}