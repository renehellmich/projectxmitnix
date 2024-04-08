import express from 'express'
import multer from 'multer'
import { Item } from '../model/items.js'
import { uploadImage } from '../utils/uploadImage.js'
export const itemRouter = express.Router()
const mult = multer({storage:multer.memoryStorage()})


itemRouter.post('/create', mult.single('image'), async (req,res)=>{
    const {titel, room, text, size} = req.body
    const uploadResult = await uploadImage(req.file.buffer)
    console.log(uploadResult)
    const imageUrl = uploadResult.secure_url
    console.log(req.file)
    if(!titel || !room || !text || !size){
        res.sendStatus(403)
        return
    }
    const item = await Item.create({titel, room, imageUrl, text, size})
    res.json(item)
})

itemRouter.get("/", async(req, res)=>{
    const item = await Item.find().lean()
    res.json(item)
})