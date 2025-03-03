import { Router } from "express";
import { validateMovie, validatePartialMovie } from '../schemas/movies.js';

const movies = readJSON("../movies.json");


import { readJSON } from "../utils";
import { MovieModel } from "../models/movie.js";

export const moviesRouter = Router();

//! Obtener películas y película por género
moviesRouter.get("/", async (req, res) => {
  const { genre } = req.query;
  const movies = await MovieModel.getAll({ genre })  
  res.json(movies);
});

//! Obtener película por id
moviesRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const movie = await MovieModel.getById({id})
  if (movie) return res.json(movie);
  res.status(404).json({ mesage: "No se encontró la película" });
});

//! Crear una película
moviesRouter.post("/", async (req, res) => {
  const result = validateMovie(req.body);

  if (result.error) {
    return res.status(400).json({ error: JSON.parse(result.error.message) });
  }

 const newMovie = await MovieModel.create({input: result.data})

  res.status(201).json(newMovie);
});

//! Borrar una película
moviesRouter.delete('/:id', async (req, res) =>{
    const {id} = req.params
    
    const result = await MovieModel.delete({ id })
    
    const movieIndex = movies.findIndex(movie => movie.id === id)
    
    if( result === false ){ 
        return res.status(404).json({message: 'No se encontró la película'})
    }
    
    
    return res.json({message: 'Pelicula borrada'})
})

//! Actualizar una película
moviesRouter.patch("/:id", async (req, res) => {
  const result = validatePartialMovie(req.body);

  if (!result.success) {
    return res.status(400).json({ error: JSON.parse(result.error.message) });
  }

  const { id } = req.params;

  const updatedMovie = await MovieModel.update({ id, input: result.data })

  return res.json(updatedMovie);
});