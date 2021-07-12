import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

import User from "../../entity/User";

export const registerValidationRules = () => {
  return [
    // first name validation
    body("firstName")
      .trim()
      .notEmpty()
      .withMessage("Please enter your first name")
      .matches(/^[a-zA-Z ]*$/)
      .withMessage("Only Characters with white spaces are not allowed"),
    // last name validation
    body("lastName")
      .trim()
      .notEmpty()
      .withMessage("Please enter your last name")
      .matches(/^[a-zA-Z ]*$/)
      .withMessage("Only Characters with white spaces are not allowed"),
    // matric no validation
    body("matricNo")
      .trim()
      .notEmpty()
      .withMessage("Fill in your matric number")
      .matches(/^(AUO)?[0-9]{2}\w{2}[0-9]{4}$/)
      .withMessage("Incorrect Matric number format")
      .custom((matricNo) => {
        return User.findOne({ matricNo }).then((user) => {
          if (user) {
            return Promise.reject(
              "Student with this particular matric number has already been created"
            );
          }
        });
      }),
    // email address validation
    body("email")
      .notEmpty()
      .withMessage("Please enter your email address")
      .normalizeEmail()
      .isEmail()
      .withMessage("Invalid email address"),
    // password validation
    body("password")
      .trim()
      .notEmpty()
      .withMessage("Please enter your password")
      .isLength({ min: 7 })
      .withMessage("Password must be minimum 7 length")
      .matches(/(?=.*?[A-Z])/)
      .withMessage("Password must have at least one Uppercase")
      .matches(/(?=.*?[a-z])/)
      .withMessage("Password must have at least one Lowercase")
      .matches(/(?=.*?[0-9])/)
      .withMessage("Password must have at least one Number")
      .matches(/(?=.*?[#?!@$%^&*-])/)
      .withMessage("Password must have at least one special character")
      .not()
      .matches(/^$|\s+/)
      .withMessage("White space not allowed"),
    // confirm password validation
    body("passwordConfirm").custom((value, { req }) => {
      if (value !== req.body.password) {
        // trow error if passwords do not match
        throw new Error("Password Confirmation does not match password");
      }
      return true;
    }),
  ];
};

export const loginValidationRules = () => {
  return [
    // matric no validation
    body("matricNo")
      .trim()
      .notEmpty()
      .withMessage("Fill in your matric number"),

    // password validation
    body("password").trim().notEmpty().withMessage("Password is required"),
  ];
};

export const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};
