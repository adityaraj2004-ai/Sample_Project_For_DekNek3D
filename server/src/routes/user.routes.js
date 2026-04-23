import { Router } from "express";
import { logInUser, logOutUser, registerUser } from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

import { refreshAccessToken } from "../controllers/user.controller.js";

const authRouter = Router()

authRouter.route("/register").post(
    registerUser)

authRouter.route("/login").post(
    logInUser)

authRouter.route("/logout").post(verifyJWT, logOutUser)

authRouter.route("/refresh-token").post(refreshAccessToken);
export default authRouter;

