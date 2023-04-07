import { Schema } from "express-validator";

export const loginValidation: Schema = {
  email: {
    notEmpty: {
      errorMessage: "email is required",
    },
    isEmail: {
      errorMessage: "email is invalid",
    },
  },
  pwd: {
    notEmpty: {
      errorMessage: "password is required",
    },
    isLength: {
      errorMessage: "password must be at least 8 words",
      options: { min: 8 },
    },
  },
};
