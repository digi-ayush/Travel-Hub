import mongoose from "mongoose";

const packageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  destination: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String },
  attractions: [{ type: String }],
});

const Package = mongoose.model("Package", packageSchema);
export default Package;
