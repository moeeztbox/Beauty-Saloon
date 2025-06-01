import express from "express";
import Complain from "../models/Complain.js";

const router = express.Router();

router.post("/complain", async (req, res) => {
  try {
    const { firstname, lastname, number, email, complain } = req.body;

    if (!firstname || !lastname || !number || !email || !complain) {
      return res.status(400).json({ message: "All fields are required." });
    }

    if (firstname.length < 3) {
      return res
        .status(400)
        .json({ message: "First name must be at least 3 characters." });
    }

    if (lastname.length < 3) {
      return res
        .status(400)
        .json({ message: "Last name must be at least 3 characters." });
    }

    if (email.length < 11) {
      return res
        .status(400)
        .json({ message: "Email must be at least 11 characters." });
    }

    if (!/^\d{11}$/.test(number)) {
      return res
        .status(400)
        .json({ message: "Phone number must be exactly 11 digits." });
    }

    if (complain.length < 10) {
      return res
        .status(400)
        .json({ message: "Complain must contain atleast 10 characters." });
    }

    const newComplain = new Complain({
      firstname,
      lastname,
      number,
      email,
      complain,
    });

    await newComplain.save();
    res.status(200).json({ message: "Complain submitted successfully!" });
  } catch (error) {
    console.error("Complain submission error:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

export default router;
