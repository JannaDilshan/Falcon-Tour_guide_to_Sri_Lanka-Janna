import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import cors from "cors";
mongoose.set('strictQuery', false);
mongoose.set('strictQuery', true);



const app = express();
dotenv.config();



const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);

    console.log("Connected to MongoDB.");
  }
  catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};






mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected!");
});

app.get("/user", (req, res) => {
  res.send("hello wold")
})






// Middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// // Routes
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);


app.use((err, req, res, next) => {

  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!"
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});


const PORT = process.env.PORT || 8800
app.listen(PORT, () => {
  connect();
  console.log("Connected to backend.");
});
