import { connect } from "@/dbConfig/dbConfig.js";
import { Contact } from "@/models/contact.model.js";
import { NextResponse } from "next/server";

export async function POST(request) {
    console.log("Received POST request"); // Initial log to confirm request entry
    await connect();

    try {
        const reqBody = await request.json();
        const { name, email, phoneNumber, interest, message } = reqBody;

        console.log("Request Body:", reqBody);

        // Validate required fields
        if (!name || !email || !phoneNumber || !interest || !message) {
            console.warn("Validation failed. Missing fields in request body.");
            return NextResponse.json({
                message: "All fields are required",
                success: false
            }, { status: 400 });
        }

        // Create new contact object
        const newContact = new Contact({
            name,
            email,
            phoneNumber,
            interest,
            message
        });

        console.log("Saving new contact to the database...");

        // Save the contact details to the database
        const savedContactDetails = await newContact.save();

        console.log("Contact saved successfully:", savedContactDetails);

        return NextResponse.json({
            message: "Message Recorded Successfully",
            success: true,
            savedContactDetails
        });

    } catch (error) {
        console.error("Error occurred while processing request:", error);

        return NextResponse.json({
            message: error.message,
            success: false
        }, { status: 500 });
    }
}
