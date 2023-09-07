import mongoose from 'mongoose';

export const connectMongoDB = async () => {

    try{

        const { connection }  = await mongoose.connect(process.env.MONGO_STRING_URL)
        let connect = await mongoose.connect(process.env.MONGO_STRING_URL)
        console.log(`Mongo connected successful HOST : ${ connect.connection.host }`);

        mongoose.connection.on("error", (error) => {
            console.error("DB connection error", error)
        })

    }catch( error ){
        console.error("Could not connect to DB", error.toString())
    }

};
