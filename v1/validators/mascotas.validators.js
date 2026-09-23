import Joi from "joi";

export const agregarMascotaSchema = Joi.object({
    nombre: Joi.string().required().messages({
        'string.empty': 'El nombre es obligatorio',
        'any.required': 'El nombre es obligatorio'
    }),
    tipo: Joi.string().valid('perro', 'gato').required().messages({
        'any.only': 'La especie debe ser "perro" o "gato"',
        'any.required': 'La especie es obligatoria'
    }),
    edad: Joi.number().integer().optional().messages({
        'number.base': 'La edad debe ser un número entero',
        'number.integer': 'La edad debe ser un número entero'
    }),
    vacunado: Joi.boolean().optional().messages({
        'boolean.base': 'El campo vacunado debe ser un valor booleano'
    })
});

export const actualizarMascotaSchema = Joi.object({
    nombre: Joi.string().forbidden().messages({
        'any.unknown': 'No se puede actualizar el nombre de la mascota'
    }),
    tipo: Joi.string().valid('perro', 'gato').optional().messages({
        'any.only': 'La especie debe ser "perro" o "gato"'
    }),
    edad: Joi.number().integer().optional().messages({
        'number.base': 'La edad debe ser un número entero',
        'number.integer': 'La edad debe ser un número entero'
    }),
    vacunado: Joi.boolean().optional().messages({
        'boolean.base': 'El campo vacunado debe ser un valor booleano'
    })
});