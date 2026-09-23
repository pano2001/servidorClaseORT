import Joi from "joi";

export const tituloSchema = Joi.string().min(6).max(10).required().messages(
    {
        'string.min': 'El titulo debe tener al menos {#limit} caracteres',
        'string.max': 'El titulo no puede tener más de {#limit} caracteres',
        'string.required': 'El titulo es obligatorio'
    }
);

export const agregarPeliculaSchema = Joi.object({
    titulo: Joi.string().trim().min(6).max(10).lowercase().required().messages(
        {
            'string.min': 'El titulo debe tener al menos {#limit} caracteres',
            'string.max': 'El titulo no puede tener más de {#limit} caracteres',
            'string.required': 'El titulo es obligatorio'
        }
    )
});