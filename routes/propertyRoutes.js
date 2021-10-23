import express from "express";
const router = express.Router();
import {
  getProperties,
  searchProperty,
} from "../controllers/propertyController.js";

router.route("/").get(getProperties);

router.route("/search").post(searchProperty);

export default router;
