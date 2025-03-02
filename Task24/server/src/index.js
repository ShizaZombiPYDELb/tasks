import fs from "fs";
import express from "express";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import { logRequestMiddleware } from "../middlewares/loggerMiddlewares.js";
import { todoController } from "./controllers/todoController.js";
import { AppConfig } from "../config/app.config.js";

const swaggerDocument = JSON.parse(fs.readFileSync(new URL("../swagger.json", import.meta.url)));

swaggerDocument.host = `${AppConfig.server.hostname}:${AppConfig.server.port}`;

export const app = express();

app.use(logRequestMiddleware);
app.use(cors());
app.use(express.json());
app.use("/", todoController);
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use((req, res) => {
    res.status(404).json({ error: "Cannot find the page!" });
});
