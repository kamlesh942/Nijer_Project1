import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  orderSummary: [
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      avatar: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  paymentMethod: {
    type: String,
    enum: ["cod", "card", "upi", "netbanking"],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("Order", orderSchema);
export { Order };
