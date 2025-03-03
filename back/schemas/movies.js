const z = require('zod')

const movieSchema = z.object({
        title: z.string({
            invalid_type_error: 'El título de la película debe ser una cadena de texto',
            required_error: 'El título de la película es requerido'
        }),
        year: z.number().int().positive().min(1900).max(2025),
        director: z.string(),
        duration: z.number().int().positive(),
        poster: z.string().url({
            message: 'Debe ser una url válida'
        }),
        rate: z.number().positive().min(0).max(10).default(5),
        genre: z.array(
            z.enum([ 'Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Thriller', 'Sci-Fi', 'Crime', 'Romance', 'Animation', 'Biography']), {
                required_error: 'El género es requerido',
                invalid_type_error: 'Este campo debe contener un género válido'
            }
        )
    })

    function validateMovie (input) {
        return movieSchema.safeParse(input)
    }

    function validatePartialMovie (input){
        return movieSchema.partial().safeParse(input)
    }

    module.exports = {
        validateMovie,
        validatePartialMovie
    } 