import express, { json } from 'express';
import cors from 'cors';
import {moviesRouter} from './routes/movies.js'



const server = express()
server.use(json())
server.use(cors())
server.disable('x-powered-by')
server.use('/movies', moviesRouter)

server.delete('/movies/:id', )

const PORT = process.env.PORT ?? 3001;

server.listen(PORT, () => {
    console.log(`Server listening on porthttp://localhost:${PORT}`);
});