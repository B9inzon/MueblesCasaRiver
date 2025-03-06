import express, { json } from "express";
import cors from "cors";
import { furnitureRouter } from "./routes/furnitureRouter.js";
import { connectDB } from "./config/database.js";

const server = express();
server.use(json());
server.use(cors());
server.disable("x-powered-by");
server.use("/furniture", furnitureRouter);

connectDB();



const PORT = process.env.PORT ?? 3001;

server.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
