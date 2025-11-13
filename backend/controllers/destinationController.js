import Destination from "../models/Destination.js";

// GET all destinations
export const getDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// GET single destination by ID
export const getDestinationById = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);
    if (destination) res.json(destination);
    else res.status(404).json({ message: "Destination not found" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// POST new destination
export const createDestination = async (req, res) => {
  try {
    const newDestination = new Destination(req.body);
    const savedDestination = await newDestination.save();
    res.status(201).json(savedDestination);
  } catch (error) {
    res.status(400).json({ message: "Invalid data" });
  }
};
