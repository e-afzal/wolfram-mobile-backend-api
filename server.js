import express from "express";
const app = express();
import dotenv from "dotenv";

import propertyRoute from "./routes/propertyRoutes.js";
import agentRoutes from "./routes/agentRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";

import connectDB from "./util/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();
app.use(express.json());

// CORS HANDLER
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Methods", "GET");
  next();
});

// ROUTES
app.get("/", (req, res) => {
  res.send("API running");
});
app.use("/api/properties", propertyRoute);
app.use("/api/agents", agentRoutes);
app.use("/api/projects", projectRoutes);

// ERROR HANDLERS
app.use(notFound);
app.use(errorHandler);

// LISTENER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on Port ${PORT}`)
);
