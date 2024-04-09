import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose'
import { itemRouter } from './controller/item.js'
import {v2 as cloudinary} from 'cloudinary'

const PORT = 3000
const app = express()

await mongoose.connect(process.env.MONGODB_URI)

app.use(cors())
app.use('/item', itemRouter)

cloudinary.config({
    cloud_name: "du97czlhz",
    api_key: "452675419245823",
    api_secret: process.env.CLOUDINARY_SECRET,
  });

app.listen(PORT)
console.log(`listen on Port ${PORT}`)