import mongoose from "mongoose";

async function dbconection () {
    try{
         await mongoose.connect('mongodb://localhost:27017/db-store');
         console.log ('connected to mongoDB')
    } catch (error) {
        console.log(error);
        console.log('connect failed ');
    }
   
}

export default dbconection;