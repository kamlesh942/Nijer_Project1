import mongoose, { Schema } from "mongoose";

const newSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
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

const Newproduct = mongoose.model("Newproduct", newSchema);
export { Newproduct };
