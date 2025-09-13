import { Router, Request, Response } from "express";
import bcrypt from "bcrypt";
import {pool} from "../dbConfig"

const router = Router()

router.get('/signup', (req: Request, res: Response) => {
  res.send(`
    <form method ='POST'>
        <h1>Sign Up</h1>
        <div>
            <label>UserName</label>
            <input name="username" type="text" required />
        </div>
        <div>
            <label>Email</label>
            <input name="email" type = "email" required />
        </div>
        <div>
            <label>Password</label>
            <input name="password" type="password" required  />
        </div>
        <div>
            <label>Confirm Password</label>
            <input name="confPassword" type="password" required  />
        </div>
        <div>
            <button>SignUp<button>
        </div>
        <a href ='/login'>Login</a>
    </form>
  `);
});

router.post('/signup', async (req: Request, res: Response) => {
    const { name, email, password, confPassword } = req.body;

    console.log({ name, email, password, confPassword });

    if (password !== confPassword) {
        return res.json({ error: 'Password and Confirm Password should be same' });
    }

    let hashedPassword = await bcrypt.hash(password, 10);

    const check = await pool.query(
        'SELECT * FROM users WHERE email = $1',
        [email]
    );

    if (check.rows.length > 0) {
        return res.json({ error: 'Email already registered' });
    } else {
        pool.query(
            'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
            [name, email, hashedPassword],
            (error: Error, results: any) => {
                if (error) {
                    return res.json({ error: "Something is wrong" });
                }
                console.log(results.row)
                return res.json({ message: "successful signup" });
            }
        );
    }
});

export {router}