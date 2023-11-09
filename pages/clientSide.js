const EP = 'http://localhost:3000'
const quotesApi = axios.create({
    baseURL: EP + '/quotes',
    headers: { 'Content-Type': 'application/json' }
})

async function getQuote(count) {
    try {
        const quote = await quotesApi.get('/get-quote', {
            params: {
                count: count
            }
        })
        return quote
    } catch (error) {
        console.error('error=', error)
    }
}

async function getInfo(name) {
    try {
        const info = await quotesApi.get('/get-info', {
            params: {
                name: name
            }
        })
        return info.data[0]
    } catch (error) {
        console.error('error =', error)
    }
}

async function getImage(name) {
    try {
        console.log("get image", name)
        const info = await quotesApi.get('/get-image', {
            params: {
                name: name
            }
        })
        return info
    } catch (error) {
        console.error('error =', error)
    }
}

let generalList = document.querySelector('.general-list > .list')

function cardHTML(name, quote) {
    let quoteCard = document.createElement('div')
    quoteCard.className = "quote-card"
    let nameHTML = document.createElement('div')
    let imageHTML = document.createElement('img')
    let quoteHTML = document.createElement('div')
    let occupationHTML = document.createElement('div')
    let buttonContainer = document.createElement('div')
    let removeButton = document.createElement('button')
    let favoriteButton = document.createElement('button')

    buttonContainer.append(favoriteButton, removeButton)
    favoriteButton.addEventListener('click', ()=>{
        console.log('liked')
    })
    removeButton.addEventListener('click', ()=>{
        console.log('removed')
    })
    favoriteButton.innerHTML = 'Like'
    removeButton.innerHTML = 'Remove'

    quoteCard.append(nameHTML, imageHTML, quoteHTML, occupationHTML, buttonContainer)

    nameHTML.innerHTML = `${name}`
    quoteHTML.innerHTML = `${quote}`

    generalList.prepend(quoteCard)
}

let generalListNames = []
let maxCount = 5
let favoriteListNames = []
let removedListNames = []

async function generateQuoteCard(num) {
    const info = await getQuote(num)
    
    info.data.forEach(quote => {
        generalListNames.unshift(quote.author)
        cardHTML(quote.author, quote.content)
    })

    // info.data.forEach()
    // console.log(info.data.content, info.data.author)
    // const author = await getInfo(info.data.author)
    // console.log("author addtional info ", author)
    // const image = await getImage(info.data.author)
    // console.log("image ", image)
    // cardHTML(info.data.author, info.data.content)
}

function removeQuoteCard(index) {
    generalListNames.splice(index, 1)
    generalList.children[index].remove()
}

function likeQuoteCard(index) {

}

function unlikeQuoteCard(index) {

}

function enableDrag() {

}

generateQuoteCard(5)

let clicked = false
function handleClick() {
    if (!clicked) {
        clicked = true
        generateQuoteCard(1)
        if (generalListNames.length >= maxCount) {
            removeQuoteCard(maxCount-1)
        }
        setTimeout(()=>{
            clicked = false
        }, 1000)
    }
}

document.getElementById('get-one-quote').addEventListener('click', ()=>{handleClick()})