import { Contact } from "@/models/contact.model";
import { NextResponse } from "next/server";
import { connect } from "@/dbConfigContactInfo/dbConfig";

export async function GET() {
    try {
        console.log("Connecting to the database...");
        await connect();
        console.log("Connected to the database.");

        const contactInfo = await Contact.find();
        console.log("Fetched data:", contactInfo);

        if (!contactInfo) {
            console.error("No contact info found.");
            return NextResponse.json({
                success: false,
                message: "Data Fetching failed"
            }, { status: 500 });
        }

        const response = NextResponse.json({
            message: "Successfully fetched Data",
            success: true,
            contactInfo
        }, { status: 200 });

        // Prevent caching by setting appropriate headers
        response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
        response.headers.set('Pragma', 'no-cache');
        response.headers.set('Expires', '0');
        response.headers.set('Surrogate-Control', 'no-store');

        console.log("Response:", response);
        return response;
    } catch (error) {
        console.error("Error while fetching data:", error.message);
        return NextResponse.json({
            success: false,
            message: `Something Went Wrong While Fetching Data of Contact Form ${error.message}`
        }, { status: 500 });
    }
}
