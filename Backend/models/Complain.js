import { Schema, model } from "mongoose";

const complainSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    complain: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Complain = model("Complain", complainSchema);
export default Complain;
