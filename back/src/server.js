const express = require('express');
const movies = require('./movies.json')
const crypto = require('node:crypto')
const z = require('zod')

const server = express()
server.use(express.json())
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
    const {
    title,
    year,
    director,
    duration,
    poster,
    genre,
    rate,
    } = req.body

    const newMovie = {
        id: crypto.randomUUID(), //! Crea un UUID v4
        title,
        year,
        director,
        duration,
        poster,
        genre,
        rate: rate ?? 0,
    }

    movies.push(newMovie)

    res.status(201).json(newMovie)
})

const PORT = process.env.PORT ?? 3001;

server.listen(PORT, () => {
    console.log(`Server listening on porthttp://localhost:${PORT}`);
});
