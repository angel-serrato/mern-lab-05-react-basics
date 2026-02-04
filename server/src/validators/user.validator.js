// Context7 docs verified
import Joi from 'joi';

const userCreateSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    'string.base': `"name" should be a type of 'text'`,
    'string.empty': `"name" cannot be an empty field`,
    'string.min': `"name" should have a minimum length of {#limit}`,
    'string.max': `"name" should have a maximum length of {#limit}`,
    'any.required': `"name" is a required field`,
  }),
  email: Joi.string().email().required().messages({
    'string.base': `"email" should be a type of 'text'`,
    'string.email': `"email" must be a valid email`,
    'string.empty': `"email" cannot be an empty field`,
    'any.required': `"email" is a required field`,
  }),
});

const userUpdateSchema = Joi.object({
  name: Joi.string().min(3).max(30).optional().messages({
    'string.base': `"name" should be a type of 'text'`,
    'string.empty': `"name" cannot be an empty field`,
    'string.min': `"name" should have a minimum length of {#limit}`,
    'string.max': `"name" should have a maximum length of {#limit}`,
  }),
  email: Joi.string().email().optional().messages({
    'string.base': `"email" should be a type of 'text'`,
    'string.email': `"email" must be a valid email`,
    'string.empty': `"email" cannot be an empty field`,
  }),
}).min(1);

export function validateUserCreate(req, res, next) {
  const { error, value } = userCreateSchema.validate(req.body, {
    abortEarly: false,
    stripUnknown: true,
  });
  if (error) {
    const errorMessages = error.details.map((detail) => detail.message);
    return res.status(400).json({
      success: false,
      errors: errorMessages,
    });
  }
  req.body = value;
  next();
}

export function validateUserUpdate(req, res, next) {
  // 1. Valida req.body contra userUpdateSchema
  const { error, value } = userUpdateSchema.validate(req.body, {
    // No se detiene en primer error
    abortEarly: false,
    // Elimina campos desconocidos
    stripUnknown: true,
  });
  // 2. Si hay error ...
  if (error) {
    // Extrae todos los mensajes de error
    const errorMessages = error.details.map((detail) => detail.message);
    // Retorna 400 con los errores y se detiene con return
    return res.status(400).json({
      success: false,
      errors: errorMessages,
    });
  }
  // 3. Si no hay error ...
  // Reemplaza con datos validados sin campos desconocidos
  req.body = value;
  // Continúa al siguiente middleware
  next();
}
