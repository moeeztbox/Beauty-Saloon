import { Schema, model } from "mongoose";

const bookingSchema = new Schema(
  {
    serviceName: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true },
    customerName: { type: String, required: true },
    selectedService: { type: String, required: true },
    stylist: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    cardName: { type: String, required: true },
    cardNumber: { type: String, required: true },
    expiryDate: { type: String, required: true },
    cvv: { type: String, required: true },
    billingAddress: { type: String, required: true },
    rating: { type: Number, required: true },
    feedback: { type: String, required: true },
  },
  { timestamps: true }
);

const Booking = model("Booking", bookingSchema);
export default Booking;
