import mongoose from "mongoose";
import asyncHandler from "express-async-handler";
import Agent from "../models/agentModel.js";

const getAgentById = asyncHandler(async (req, res) => {
  try {
    const agent = await Agent.findById(req.params.id).select(
      "_id name position image"
    );
    res.status(200).json(agent);
  } catch (error) {
    res.status(404);
    throw new Error("Agent not found..");
  }
});

export { getAgentById };
