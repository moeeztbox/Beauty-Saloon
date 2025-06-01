import { Schema, model } from "mongoose";

const subscriberSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
});

const Subscribe = model("Subscriber", subscriberSchema);
export default Subscribe;
