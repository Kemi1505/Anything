import express, {Response, Request} from 'express'
import { router } from './routes/signup';
import { router1 } from './routes/login';

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router,router1)

app.get('/', (req: Request, res: Response) =>{
    res.send('First Endpoint with get')
})

app.listen(5000,()=>{
    console.log('listening on 5000')
})