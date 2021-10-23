import express from "express";
const router = express.Router();
import {
  featuredProjects,
  getProjects,
  getProjectById,
} from "../controllers/projectController.js";

router.route("/").get(getProjects);
// router.route("/featuredProjects").get(featuredProjects);
router.route("/:id").get(getProjectById);

export default router;
