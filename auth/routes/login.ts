import { Router, Request, Response } from "express";

const router1 = Router()

router1.get('/login', (req: Request, res: Response) => {
  res.send(`
    <form method ='POST'>
        <h1>Log In</h1>
        <div>
            <label>Email</label>
            <input name="email" type = "email" required />
        </div>
        <div>
            <label>Password</label>
            <input name="password" type="password" required  />
        </div>
        <div>
            <button>Log In<button>
        </div>
        
        <a href ='/signup'>SignUp</a>
        
    </form>
  `);
});

export {router1}