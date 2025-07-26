import { Router } from "express";
import { registerUser } from "../controllers/auth.controller";
import { validate } from "../middlewares/validator.middleware.js";
import { userRegistrationValidator } from "../validators.js";

const router = Router();

router
  .route("/register")
  .post(userRegistrationValidator(), validate, registerUser);

export default router;
