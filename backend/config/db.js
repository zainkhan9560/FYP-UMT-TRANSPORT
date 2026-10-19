import mongoose from "mongoose"
async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI)

        console.log("Connected to MongoDB Atlas")
    } catch (err) {
        console.error("Error connecting to MongoDB Atlas:", err.message)
        process.exit(1)
    }
}

export default connectDB