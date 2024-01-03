import mongoose from "mongoose";
// import dotenv from "dotenv"
// dotenv.config()

const connectToDatabase = async () => {
    try {
        const uri = process.env.URI + process.env.DATABASE
        await mongoose.connect(uri, {
            serverSelectionTimeoutMS: 2000
        })
        console.log('connected to mongo db atlas')

    }
    catch (e) {
        console.log(e)
        throw(e)
    }
}

export default connectToDatabase