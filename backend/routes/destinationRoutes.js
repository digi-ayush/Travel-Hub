import express from "express";
import {
  getDestinations,
  createDestination,
  getDestinationById,
} from "../controllers/destinationController.js";

const router = express.Router();

router.get("/", getDestinations);
router.post("/", createDestination);
router.get("/:id", getDestinationById);

export default router;
