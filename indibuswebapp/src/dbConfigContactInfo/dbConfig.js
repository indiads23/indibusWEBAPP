import mongoose from "mongoose"
import { DBNAME } from "./constant"

export const connect = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DBNAME}`)
        console.log(`MongoDB Connected!! DB host ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("Something Went wrong at DB connection");
        console.log(error);
    }

}