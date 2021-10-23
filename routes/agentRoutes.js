import express from "express";
const router = express.Router();

import { getAgentById } from "../controllers/agentControllers.js";

router.route("/:id").get(getAgentById);

export default router;
