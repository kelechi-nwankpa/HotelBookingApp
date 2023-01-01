import express from "express";
import dotenv from "dotenv" ;
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"; //I can use any name I want in place of authRoute.
//import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
//import roomsRoute from "./routes/rooms.js";

const app = express();

dotenv.config();

mongoose.set('strictQuery', true); // This removes the depracation warning


//This function is important because after a successful first connection, it attempts to reconnect if any connection problem occurs.
const connect = async() => { 
    try {
        const res = await mongoose.connect(process.env.MONGO);
        //console.log(res.status);
        console.log("Connected to MongoDB");
      } catch (error) {
        throw error;
      }
}

app.get("/users", (req, res) => {
    res.send("Hello, first rrrequest!!!!");
})

mongoose.connection.on("disconnectede", ()=> {
    console.log("MongoDB Disconnected!");
})


//creating middleware
app.use(express.json());// This allows json requests be sent to the express server.

app.use("/api/auth", authRoute); //if we visit/request the endpoint(/auth), we use (authRoute)
//app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
//app.use("/api/rooms", roomsRoute);


//middlewares---This middleware handles errors in the routes
app.use((err,req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";

    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    });
    
})


app.listen(8000, () => {
    connect();
    console.log("Connected to backend!!!!!!")
})
