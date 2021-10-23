import express from "express";
import mongoose from "mongoose";
import asyncHandler from "express-async-handler";

import Project from "./../models/projectModel.js";

const featuredProjects = asyncHandler(async (req, res) => {
  try {
    const projects = await Project.find().select(
      "_id name area city carouselImg"
    );
    res.status(200).json(projects);
  } catch (error) {
    res.status(404);
    throw new Error("Unable to fetch projects..");
  }
});

const getProjects = asyncHandler(async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(404);
    throw Error("Unable to fetch projects..");
  }
});

const getProjectById = asyncHandler(async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).select(
      "carouselImg category name area city developer price pricePerSqFt bedrooms units status deliveryDate description map planBooking planHandover planComplete"
    );
    res.status(200).json(project);
  } catch (error) {
    res.status(404);
    throw new Error("Project not found..");
  }
});

export { featuredProjects, getProjects, getProjectById };
