import express from 'express'
import multer from 'multer'
import { Item } from '../model/items.js'

export const itemRouter = express.Router()
const mult = multer()

itemRouter.post('/create', mult.single(), async (req,res)=>{
    const {titel, room, imageURL, text, size} = req.body
    if(!titel || !room || !imageURL || !text || !size){
        res.sendStatus(403)
        return
    }
    const item = await Item.create({titel, room, imageURL, text, size})
    res.json(item)
})

itemRouter.get("/", async(req, res)=>{
    
})