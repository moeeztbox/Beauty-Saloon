import { Router } from "express";
import Subscribe from "../models/Subscriber.js";

const router = Router();

router.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  if (email.length < 11) {
    return res
      .status(400)
      .json({ message: "Email must be at least 11 characters long." });
  }

  try {
    const existing = await Subscribe.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: "Email already subscribed" });
    }
    const newSubscriber = new Subscribe({ email });
    await newSubscriber.save();

    res.status(201).json({ message: "Subscribed successfully!" });
  } catch (err) {
    console.error("Error subscribing:", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
