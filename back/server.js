const express = require('express');
const crypto = require('node:crypto');
const cors = require('cors')

const movies = require('./movies.json')
const { validateMovie, validatePartialMovie } = require('./schemas/movies');

const server = express()
server.use(express.json())
server.use(cors())
server.disable('x-powered-by')

//Todo Obtener películas y película por género
server.get('/movies', (req, res) =>{
    const {genre} = req.query
    if(genre){
        const filteredMovies = movies.filter(
            movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
        )
        return res.json(filteredMovies)
    }
    res.json(movies)
})

//todo Obtener película por id
server.get('/movies/:id', (req, res)=>{
    const {id} = req.params
    const movie = movies.find(movie => movie.id === id)
    if(movie) return res.json(movie)

    res.status(404).json({mesage: 'No se encontró la película'})
})

//todo Crear una película
server.post('/movies', (req, res) =>{
    const result = validateMovie(req.body)

    if(result.error){
        return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const newMovie = {
        id: crypto.randomUUID(), //! Crea un UUID v4
        ... result.data
    }

    movies.push(newMovie)

    res.status(201).json(newMovie)
})

//todo Actualizar una película
server.patch('/movies/:id', (req, res) =>{
    const result = validatePartialMovie(req.body)
    
    if(!result.success){
        return res.status(400).json({error: JSON.parse(result.error.message)})
    }
    
    const {id} = req.params
    const movieIndex = movies.findIndex(movie => movie.id === id)

    if( movieIndex === -1 ) return res.status(404).json({message: 'No se encontró la película'})

    const updateMovie = {
        ...movies[movieIndex],
        ...result.data
    }

    movies[movieIndex] = updateMovie

    return res.json(updateMovie)
})

//todo Borrar película
server.delete('/movies/:id', (req, res) =>{
    const {id} = req.params
    const movieIndex = movies.findIndex(movie => movie.id === id)

    if( movieIndex === -1 ){ return res.status(404).json({message: 'No se encontró la película'})}
    movies.splice(movieIndex, 1)

    return res.json({message: 'Pelicula borrada'})
})

const PORT = process.env.PORT ?? 3001;

server.listen(PORT, () => {
    console.log(`Server listening on porthttp://localhost:${PORT}`);
});
