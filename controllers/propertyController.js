import express from "express";
import mongoose from "mongoose";
import asyncHandler from "express-async-handler";

import Property from "../models/propertyModel.js";

const getProperties = asyncHandler(async (req, res) => {
  try {
    const properties = await Property.find()
      .select(
        "image category refNo city area name price completion bedrooms bathrooms buildUp description agent map"
      )
      .populate("agent", "name position image");
    res.status(200).json(properties);
  } catch (err) {
    res.status(404);
    throw Error("Unable to fetch properties");
  }
});

const searchProperty = asyncHandler(async (req, res) => {
  try {
    const { keyword, minPrice, maxPrice, minBed, maxBed, category } = req.body;

    const result1 = await Property.find({
      name: new RegExp(`.*${keyword}.*`, "i"),
      bedrooms: {
        $gte: minBed < 1 ? 1 : minBed,
        $lte: maxBed > 10 ? 10 : maxBed,
      },
      price: { $gte: minPrice || 0, $lte: maxPrice || 50000000 },
      category: category === "all" ? ["apartment", "villa"] : category,
      // price: {
      //   $gte: minPrice < 1000000 ? 1000000 : minPrice,
      //   $lte: maxPrice > 50000000 ? 50000000 : maxPrice,
      // },
    })
      .select(
        "image category refNo city area name price completion bedrooms bathrooms buildUp description agent map"
      )
      .populate("agent", "name position image");

    const result2 = await Property.find({
      area: new RegExp(`.*${keyword}.*`, "i"),
      bedrooms: {
        $gte: minBed < 1 ? 1 : minBed,
        $lte: maxBed > 10 ? 10 : maxBed,
      },
      price: { $gte: minPrice || 0, $lte: maxPrice || 50000000 },
      category: category === "all" ? ["apartment", "villa"] : category,
      // price: {
      //   $gte: minPrice < 1000000 ? 1000000 : minPrice,
      //   $lte: maxPrice > 50000000 ? 50000000 : maxPrice,
      // },
    })
      .select(
        "image category refNo city area name price completion bedrooms bathrooms buildUp description agent map"
      )
      .populate("agent", "name position image");

    if (result1.length === 0) {
      res.json(result2);
    } else if (result2.length === 0) {
      res.json(result1);
    } else if (result1.length > 0 && result2.length > 0) {
      const mergedResults = [...result1, ...result2];

      // REMOVE DUPLICATES using SET
      const set = new Set();
      const finalResult = mergedResults.filter((obj) => {
        const duplicate = set.has(obj.id);
        set.add(obj.id);
        return !duplicate;
      });
      res.json(finalResult);
    }

    // CHAINING 2 find methods
    // const result = await Property.find({
    //   area: new RegExp(`.*${keyword}.*`, "i"),
    // }).find({ bedrooms: { $gte: 1, $lte: 3 } });
    // res.json(result);
  } catch (error) {
    res.status(404);
    throw new Error("Property not found..");
  }
});

export { getProperties, searchProperty };
