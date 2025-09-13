"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const storeUrl = {};
function shortUrl() {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let randomUrl = [];
    for (let i = 0; i < 4; i++) {
        let randomIndex = Math.floor(Math.random() * 52);
        const lettersArray = letters.split('');
        randomUrl.push(lettersArray[randomIndex]);
    }
    let numberIndex = Math.floor(Math.random() * 10);
    let psnIndex = Math.floor(Math.random() * 4);
    randomUrl.splice(psnIndex, 0, numberIndex);
    return randomUrl.join('');
}
app.get('/', (req, res) => {
    res.send(`
        <div>
            <h1> URL Shortner </h2>
            <form method="POST" action="/shorten">     
                <input type="text" name="url" placeholder="Enter long URL" required />
                <button>Submit</button>
            </form>
        </div>
    `);
});
app.post('/shorten', (req, res) => {
    const longUrl = req.body.url;
    let shortenedUrl = shortUrl();
    storeUrl[shortenedUrl] = longUrl;
    res.send(`
        <div>
            This is your short Url: <a href="/${shortenedUrl}">http://localhost:3000/${shortenedUrl}</a>
        </div>`);
});
app.get('/:short', (req, res) => {
    const short = req.params.short;
    const longUrl = storeUrl[short];
    if (!longUrl)
        return res.send('errror');
    res.redirect(longUrl);
});
app.listen(3000, () => {
    console.log('listening on 3000');
});
//# sourceMappingURL=index.js.map