function high(x){
    const words = x.split(' ')
    
    const scores = words.map(x => {
        const chars = [...x]
        const points = chars.map(x => x.charCodeAt() - 96)
        return points.reduce((acc, val) => {
            return acc += val
        },0)
    })

    return words[scores.indexOf(Math.max(...scores))]
}

console.log(high('man i need a taxi up to ubud')) // taxi