import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  region: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, default: 0 },
  image: { type: String, required: true },
  description: { type: String },
  attractions: [{ type: String }],
});

const Destination = mongoose.model("Destination", destinationSchema);
export default Destination;
