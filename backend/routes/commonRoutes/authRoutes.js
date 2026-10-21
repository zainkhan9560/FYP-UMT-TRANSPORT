import { signup, login } from "../../controllers/commonControllers/AuthController.js";
import { signUpValidation, loginValidation } from "../../middlewares/authValidation.js";
import express from "express"

const router = express.Router()

router.post("/signup", signUpValidation, signup)

router.post("/login", loginValidation, login)

export default router