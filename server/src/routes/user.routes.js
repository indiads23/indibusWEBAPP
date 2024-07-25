import { Router } from "express";
import { getCurrentUser, loginUser, logoutUser, refreshAccessToken, registerUser, updateAccountDetails, updateAvatar, updateUserPassword } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name:"avatar",
            maxCount:1
        }
    ]),
    registerUser)

router.route("/login").post(loginUser)

//secure Routes

router.route("/logout").post(verifyJWT,logoutUser)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/update-password").post(verifyJWT,updateUserPassword)
router.route("current-user").post(verifyJWT,getCurrentUser)
router.route("update-email-fullname").post(verifyJWT,updateAccountDetails)
router.route("update-avatar").post(verifyJWT,updateAvatar)



export default router 