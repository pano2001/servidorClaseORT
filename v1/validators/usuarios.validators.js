import Joi from "joi";

export const agregarUsuarioSchema = Joi.object({
    nombre: Joi.string().min(3).max(30).required().messages({
        'string.min': 'El nombre debe tener al menos {#limit} caracteres',
        'string.max': 'El nombre no puede tener más de {#limit} caracteres',
        'any.required': 'El nombre es obligatorio'
    }),
    email: Joi.string().email().required().messages({
        'string.email': 'El email debe tener un formato válido',
        'any.required': 'El email es obligatorio'
    }),
    edad: Joi.number().min(18).max(100).required().messages({
        'number.min': 'La edad debe ser al menos {#limit}',
        'number.max': 'La edad no puede ser mayor a {#limit}',
        'any.required': 'La edad es obligatoria'
    }),
    contraseña: Joi.string().min(6).pattern(/^(?=.*[a-zA-Z])(?=.*\d)/).required().messages({
        'string.min': 'La contraseña debe tener al menos {#limit} caracteres',
        'string.pattern.base': 'La contraseña debe tener al menos una letra y un número',
        'any.required': 'La contraseña es obligatoria'
    }),
    repetirContraseña: Joi.string().valid(Joi.ref('contraseña')).required().messages({
        'any.only': 'Las contraseñas no coinciden',
        'any.required': 'Repetir contraseña es obligatorio'
    }),
    aceptaTerminos: Joi.boolean().valid(true).required().messages({
        'boolean.valid': 'Debe aceptar los términos y condiciones',
        'any.required': 'Aceptar términos es obligatorio'
    })
});
