import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose'
import { itemRouter } from './controller/item.js'

const PORT = 3000
const app = express()

await mongoose.connect(process.env.MONGODB_URI)

app.use(cors())
app.use('/item', itemRouter)


app.listen(PORT)
console.log(`listen on Port ${PORT}`)