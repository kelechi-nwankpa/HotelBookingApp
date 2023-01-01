import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { createHotel } from "../controllers/hotel.js";
import { updateHotel } from "../controllers/hotel.js";
import { deleteHotel } from "../controllers/hotel.js";
import { getHotel } from "../controllers/hotel.js";
import { getAllHotels } from "../controllers/hotel.js";


const router = express.Router();

//create
//we use async because we are connecting to our DB & trying to make new connection and new document and collection inside the DB.
router.post("/", createHotel);


//delete
router.delete("/:id", deleteHotel);


//update
router.put("/:id", updateHotel);

//get
router.get("/:id", getHotel);

//get all
router.get("/", getAllHotels);

export default router;