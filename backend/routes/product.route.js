import express from "express";
import mongoose from "mongoose";  // To check if ID is valid MongoDB ObjectId
const router = express.Router();

import {
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/product.controller.js";

// Route to create a new product
router.post("/", createProduct);

// Route to delete a product by its ID
router.delete("/id",deleteProduct)

// Route to get all products
router.get("/", getProduct);

// Route to update a product by its ID
router.put("/:id", updateProduct);


export default router;
