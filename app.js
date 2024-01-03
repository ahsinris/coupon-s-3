import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
app.listen(process.env.PORT, () => {
    console.log(`port listned at ${process.env.PORT}`)
})