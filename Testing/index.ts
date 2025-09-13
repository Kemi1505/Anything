import express, {Response, Request} from 'express'

const app = express();

app.use(express.json())

app.get('/', (req: Request, res: Response) =>{
    res.send('First Endpoint with get')
})

app.post('/post1', (req: Request, res: Response) =>{
    const post1 = req.body;

    res.json({
        postreq: 'First post request',
        post1: post1
    })
})

app.listen(4567, ()=>{
    console.log('Two end points gotten')
})


