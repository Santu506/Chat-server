import mongoose from 'mongoose'

 export const connectDB = async () => {
    try {
        const con = await mongoose.connect(`${process.env.MONGO_URI}`, { dbName: "Chattu" });
        console.log(`MongoDB connected: ${con.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
};
