import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/Auth.js";
import subscribeRoutes from "./routes/Subscribe.js";
import queryRoutes from "./routes/Query.js";
import complainRoutes from "./routes/Complain.js";
import bookingRoutes from "./routes/Booking.js";
import cancelRoutes from "./routes/Cancel.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api", authRoutes);
app.use("/api", subscribeRoutes);
app.use("/api", queryRoutes);
app.use("/api", complainRoutes);
app.use("/api", bookingRoutes);
app.use("/api", cancelRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
