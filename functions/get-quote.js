// getting quote
const axios = require('axios')

async function getQuote(count) {
    try {
        const quote = await axios.get(`https://api.quotable.io/quotes/random?limit=${count}`)
        if(quote.status !== 200) throw new Error('Error: get-quote : getQuote error =', error.toString())
        return quote.data
    } catch (error) {
        throw new Error(error.toString())
    }
}

// get additional info
async function getInfo(name) {
    try {
        const config = {
            headers: {'X-Api-Key': 'U5Axj6eTUgj56xL7rwDJjw==xpkPG9SOuTDm6Z5U'},
            contentType: 'application/json'
        }
        const info = await axios.get('https://api.api-ninjas.com/v1/historicalfigures?name=' + name, config)
        if(info.status !== 200) throw new Error('Error: get-quote : getQuote error =', error.toString())
        return info.data
    } catch (error) {
        throw new Error(error.toString())
    }
   
}

// getting image
async function getImage(name) {
    try {
        const newName = name.replace(' ', '%20')
        const imageInfo = await axios.get(`https://en.wikipedia.org/w/api.php?action=query&format=json&prop=images&titles=${newName}&formatversion=2`)
        if(imageInfo.status !== 200) throw new Error('Error: get-quote : getQuote error =', error.toString())
        const imgFile = imageInfo.data.query.pages[0].images[0].title
        return imgFile
    } catch (error) {
        throw new Error(error.toString())
    }
}

module.exports = {getQuote, getInfo, getImage}

