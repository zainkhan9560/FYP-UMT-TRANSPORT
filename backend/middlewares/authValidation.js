
import Joi from "joi";

const signUpValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().trim().min(3).max(100).required(),

    email: Joi.string().trim().email().required(),

    password: Joi.string().min(8).max(100).required(),

    confirmPassword: Joi.string()
      .valid(Joi.ref("password"))
      .required()
      .messages({
        "any.only": "Passwords do not match",
      }),
  });

  const { error, value } = schema.validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: error.details.map((detail) => detail.message),
    });
  }

  // Use the validated and trimmed values in the controller.
  req.body = value;

  next();
};

const loginValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().trim().email().required(),
    password: Joi.string().min(1).max(100).required(),
  });

  const { error, value } = schema.validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: error.details.map((detail) => detail.message),
    });
  }

  req.body = value;

  next();
};

export { signUpValidation, loginValidation };
