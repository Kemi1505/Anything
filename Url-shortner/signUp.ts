import express, {Request, Response} from 'express'

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

type UserInterface ={
    username: string,
    email: string,
    password: string | number
}

const users: UserInterface[] = []

app.get('/signup', (req: Request, res: Response)=>{
    res.send(`
        <form method ='POST'>
            <div>
                <label>UserName</label>
                <input name="username" />
            </div>
            <div>
                <label>Email</label>
                <input name="email" />
            </div>
            <div>
                <label>Password</label>
                <input name="password" type="password" />
            </div>
            <div>
                <label>Confirm Password</label>
                <input name="confPassword" type="password" />
            </div>
            <button>SignUp<button>
        </form>
    `)
})

app.post('/signup',(req: Request, res:Response) => {
    const {username, password, email, confPassword} = req.body

    if(password !== confPassword){
        res.send('Password and Confirm Password should be same')
    }else{
        const newUser:UserInterface = {username, password,email}
        users.push(newUser)

        res.send(`Hello ${username}, you just signed up`)
    }
})

app.listen(4000, ()=>{
    console.log('listening to port 3000')
})
