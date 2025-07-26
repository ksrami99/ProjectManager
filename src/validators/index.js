import { body } from "express-validator";
import { AvailableUserRoles } from "../utils/constants";

const userRegistrationValidator = () => {
  return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Invalid Email"),

    body("username")
      .trim()
      .notEmpty()
      .withMessage("username is required")
      .isLength({ min: 3 })
      .withMessage("username should be at least 3 char")
      .isLength({ max: 13 })
      .withMessage("username cannot exceed 13 char"),

    body("password").trim().isStrongPassword({ minLength: 8 }),

    body("role").isIn(AvailableUserRoles).withMessage("Invalid role provided"),
  ];
};

const userLoginValidation = () => {
  return [
    body("email").trim().isEmail().withMessage("Invalid Email"),

    body("password").notEmpty().withMessage("Password cannot be empty"),
  ];
};

export { userRegistrationValidator, userLoginValidation };
