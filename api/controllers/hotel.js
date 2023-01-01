import Hotel from "../models/Hotel.js";

export const createHotel = async(req, res, next) => {

    const newHotel = new Hotel(req.body); //creating an instance of the Mongoose Model.

    try {
        const savedHotel = await newHotel.save(); //This make mongoose insert a new document.
        res.status(200).json(savedHotel);
    } catch (err) {
        next(err);
    }

}

export const updateHotel = async(req, res, next) => {

    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
            
        )
        res.status(200).json(updatedHotel);
    } catch (err) {
        next(err);
    }

}

export const deleteHotel = async(req, res, next) => {

    try {
        await Hotel.findByIdAndDelete(
           req.params.id
       )
       res.status(200).json("Hotel has been deleted");
   } catch (err) {
    next(err);
   }
}

export const getHotel = async(req, res, next) => {

    //what if an operation fails here and i do not want it to proceed to the "try/catch" operation below ?

    try {
        const getHotel = await Hotel.findById(req.params.id)
        res.status(200).json(getHotel);
        console.log("heyyyy11");
    } catch (err) {
        next(err);
       
    }
}

export const getAllHotels = async(req, res, next) => {

    //what if an operation fails here and i do not want it to proceed to the "try/catch" operation below ?
    //const failed = true;
    //if(failed) return next(createError(401, "You are not authenticated"));
    
    try {
        const Hotels = await Hotel.find();
        res.status(200).json(Hotels);
        console.log("hii");
    } catch (err) {
        next(err);  //This makes use of the middleware to catch errors.
    }
}