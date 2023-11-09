const express = require('express')
const quotesFunctions = require("../functions/get-quote")

const router = express.Router()

router.get('/get-quote', async (request, response) => {
    const { count } = request.query
    const quote = await quotesFunctions.getQuote(count)
    response.send(quote)
})

router.get('/get-info', async (request, response) => {
    const { name } = request.query
    const information = await quotesFunctions.getInfo(name)
    response.send(information)
})

router.get('/get-image', async (request, response) => {
    console.log("this is where the photo is")
    const { name } = request.query
    const image = await quotesFunctions.getImage(name)
    response.send(image)
})


module.exports = router