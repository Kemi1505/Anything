export function genShortUrl(): string{
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
