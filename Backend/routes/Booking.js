import express from "express";
import Booking from "../models/Booking.js";
import moment from "moment";

const router = express.Router();

router.post("/booking", async (req, res) => {
  try {
    const bookingData = req.body;
    const { stylist, date, time, duration } = bookingData;

    const appointmentStart = moment(`${date} ${time}`, "YYYY-MM-DD HH:mm");
    const appointmentEnd = moment(appointmentStart).add(duration, "minutes");

    const allSameDayBookings = await Booking.find({ date: new Date(date) });

    let overlapCount = 0;

    for (const booking of allSameDayBookings) {
      const bookedStart = moment(
        `${booking.date.toISOString().split("T")[0]} ${booking.time}`,
        "YYYY-MM-DD HH:mm"
      );
      const bookedEnd = moment(bookedStart).add(booking.duration, "minutes");

      const isOverlap =
        appointmentStart.isBefore(bookedEnd) &&
        appointmentEnd.isAfter(bookedStart);
      if (isOverlap) overlapCount++;
    }

    if (overlapCount >= 5) {
      return res.status(400).json({
        message:
          "All slots are booked for this time. Please select a different time.",
      });
    }

    const stylistBookings = await Booking.find({
      stylist,
      date: new Date(date),
    });

    for (const booking of stylistBookings) {
      const bookedStart = moment(
        `${booking.date.toISOString().split("T")[0]} ${booking.time}`,
        "YYYY-MM-DD HH:mm"
      );
      const bookedEnd = moment(bookedStart).add(booking.duration, "minutes");

      const isStylistOverlap =
        appointmentStart.isBefore(bookedEnd) &&
        appointmentEnd.isAfter(bookedStart);
      if (isStylistOverlap) {
        return res.status(400).json({
          message: `Stylist ${stylist} is already booked from ${bookedStart.format(
            "HH:mm"
          )} to ${bookedEnd.format(
            "HH:mm"
          )}. Please choose another time or stylist.`,
        });
      }
    }

    const newBooking = new Booking(bookingData);
    await newBooking.save();

    res.status(200).json({ message: "Booking submitted successfully!" });
  } catch (error) {
    console.error("Booking submission error:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

export default router;
