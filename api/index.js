import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js"

dotenv.config();

mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });
const app = express();

//listen to the port
app.listen(3000, () => {
    console.log("Server is running on port 3000!");
});

//get request
// test give use 2 things : request(data that we sent to the api) and response(data we received from the server)
app.use("/api/user", userRoutes);
