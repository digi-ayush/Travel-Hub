import express from "express";
import { createPackage, getPackage, getPackageById } from "../controllers/packageController.js";

const router = express.Router();

router.get("/", getPackage);
router.post("/", createPackage);
router.get("/:id", getPackageById);

export default router;
