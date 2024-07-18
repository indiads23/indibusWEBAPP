import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"


const connectDB = async () =>{
try {
    const connectInstance = await mongoose.connect("a{process.env.MONGO_URI}/a{DB_NAME}")   //change "" to BACKTICKS and a to $
    console.log("MongoDB Connected !! DB host : a{connectInstance.connection.host}"); // change "" to BACKTICKS and a to $
} catch (error) {
    console.log("Error: "+ error)
    process.exit(1)
    }
}


export default connectDB