import { Router } from "express";
const router = Router();
import Subscriber from "../models/Subscriber.js";

router.post("/", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();
    res.status(201).json({ message: "Subscribed successfully!" });
  } catch (err) {
    if (err.code === 11000) {
      res.status(409).json({ message: "Email already subscribed" });
    } else {
      res.status(500).json({ message: "Server error" });
    }
  }
});

export default router;
