// import { value body, value validationResult } from 'express-validator';
// import express from "express"
// import { RequestHandler } from "express";

// export const checkEmail: RequestHandler = async (req, res) => {
//     // username must be an email
//   body('username').isEmail(),
//   // password must be at least 5 chars long
//   body('password').isLength({ min: 5 }),
//   (req: express.Request, res: express.Response) => {
//     // Finds the validation errors in this request and wraps them in an object with handy functions
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//   }
// }

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

// export const createTransactionValidation: Schema = {
//   amount: {
//     in: ["body"],
//     isFloat: {
//       errorMessage: "Amount must be a number",
//     },
//     custom: {
//       async options(value: number) {
//         const amount = Number(value);

//         if (amount < 2000) {
//           throw new Error("amount must be greater than 2000");
//         }

//         if (amount > 5000000) {
//           throw new Error("amount must be smaller than 5000000");
//         }
//         return true;
//       },
//     },

//     toFloat: true,
//   },

//   type: {
//     in: ["body"],
//     isInt: {
//       errorMessage: "type must be int",
//     },
//   },

//   transaction_date: {
//     notEmpty: {
//       errorMessage: "transaction date is required",
//     },
//     isDate: {
//       errorMessage: "transaction date must be a date",
//     },
//     toDate: true,
//   },

//   "bankDetail.bank_id": {
//     in: ["body"],
//     notEmpty: {
//       errorMessage: "Bank is required",
//     },
//     isInt: {
//       errorMessage: "Bank must be an integer",
//     },
//   },

//   "bankDetail.account_number": {
//     in: ["body"],
//     notEmpty: {
//       errorMessage: "Account number is required",
//     },
//     isLength: {
//       options: {
//         min: 10,
//       },
//       errorMessage: "Account number must be at least 10 characters long",
//     },
//   },

//   "bankDetail.name": {
//     in: ["body"],
//     optional: true,
//     isLength: {
//       options: {
//         min: 3,
//       },
//       errorMessage: "Name must be at least 3 characters long",
//     },
//   },
// };
