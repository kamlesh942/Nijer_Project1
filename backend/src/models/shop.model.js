import mongoose, { Schema } from "mongoose";

const shopSchema = new Schema(
  {
    label: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Shop = mongoose.model("Shop", shopSchema);
export { Shop };
