import express from "express";
import { Request, Response, NextFunction } from "express";
import Router from "./routes/searchName";
import idRouter from "./routes/searchById";
import readmeRouter from './routes/getReadme'

const app = express(); 
const PORT = process.env.PORT || 3000;

app.use(express.json());

const logger = (req : Request, res : Response, next : NextFunction) => {
  console.log(req.method, req.url);
  next();
}
app.use(logger)

app.use("/api/repositories", Router);
app.use("/api/repositoryDetails", idRouter);
app.use("/api/getreadme", readmeRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});