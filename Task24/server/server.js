import mongoose from "mongoose";
import { Logger } from "./libs/logger.js";
import { AppConfig } from "./config/app.config.js";
import { app } from "./src/index.js";

const { port, hostname } = AppConfig.server;
const { connectionString } = AppConfig.db;

// Подключение к MongoDB с опциями
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        Logger.info("Connected to MongoDB 🐾🐾🐾");
    })
    .catch((error) => {
        Logger.error(`Error during initial MongoDB connection: ${error.message}`);
    });

const db = mongoose.connection;

db.on("error", (error) => {
    Logger.error(`MongoDB connection error: ${JSON.stringify(error)}`);
});

app.listen(port, hostname, (error) => {
    if (error) {
        Logger.error(`Error starting the server: ${error.message}`);
    } else {
        Logger.info(`Server is serving on http://${hostname}:${port}`);
        Logger.info(`Swagger documentation is serving on http://${hostname}:${port}/api`);
    }
});
