import express from "express";
import Query from "../models/Query.js";

const router = express.Router();

router.post("/query", async (req, res) => {
  try {
    const { name, number, email, query } = req.body;

    if (!name || !number || !email || !query) {
      return res.status(400).json({ message: "All fields are required." });
    }

    if (name.length < 3) {
      return res
        .status(400)
        .json({ message: "Name must be at least 3 characters long." });
    }

    if (!/^\d{11}$/.test(number)) {
      return res
        .status(400)
        .json({ message: "Phone number must be exactly 11 digits." });
    }

    if (email.length < 11) {
      return res
        .status(400)
        .json({ message: "Email must be at least 11 characters long." });
    }

    if (query.length < 10 || query.length > 500) {
      return res.status(400).json({
        message: "Query must be between 10 and 500 characters long.",
      });
    }

    const newQuery = new Query({ name, number, email, query });
    await newQuery.save();

    res.status(200).json({ message: "Query submitted successfully!" });
  } catch (error) {
    console.error("Query submission error:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

export default router;
