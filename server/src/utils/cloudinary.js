import {v2 as cloudinary} from "clodinary" 
import fs from "fs" 

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
  });
  

  const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload the File on Cloudinary 
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        //file has been uploaded succesfully
        console.loglog("File is Upload succesful", response.url)
        return response
    } catch (error) {
        fs.unlinkSync (localFilePath) //Removes file as the upload operation got failed
        return null
    }
  }
  

export {uploadOnCloudinary}