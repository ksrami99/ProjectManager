import express from "express";

const app = express();

// Router imports
import healthCheckRouter from "./routes/healthCheck.routes.js";

app.use("/api/v1/healthCheck", healthCheckRouter);

export default app;
