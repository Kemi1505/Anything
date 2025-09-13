import express, {Response, Request} from 'express'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const storeUrl: {[url: string]: string} = {}

function shortUrl(): string{
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let randomUrl: (string|number)[] = []

    for(let i=0; i < 4; i++){
        let randomIndex = Math.floor(Math.random()* 52)
        const lettersArray = letters.split('')
        randomUrl.push(lettersArray[randomIndex]!)
    }

    let numberIndex = Math.floor(Math.random()* 10)
    let psnIndex = Math.floor(Math.random()* 4)

    randomUrl.splice(psnIndex, 0, numberIndex)
    
    return randomUrl.join('')
}

app.get('/', (req: Request, res: Response) =>{
    res.send(`
        <div>
            <h1> URL Shortner </h2>
            <form method="POST" action="/shorten">     
                <input type="text" name="url" placeholder="Enter long URL" required />
                <button>Submit</button>
            </form>
        </div>
    `)
})

app.post('/shorten', (req: Request, res: Response) =>{
    const longUrl = req.body.url
    let shortenedUrl = shortUrl()
    storeUrl[shortenedUrl] = longUrl
    res.send(`
        <div>
            This is your short Url: <a href="/${shortenedUrl}">http://localhost:3000/${shortenedUrl}</a>
        </div>`)

}) 


app.get('/:short', (req: Request, res: Response) =>{
    const short = req.params.short as string
    const longUrl = storeUrl[short]
    if(!longUrl) return res.send('errror');
    res.redirect(longUrl)
})

app.listen(3000, () =>{
    console.log('listening on 3000')
})