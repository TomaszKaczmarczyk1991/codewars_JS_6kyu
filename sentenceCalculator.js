function lettersToNumbers(s) {
    return [...s].reduce((acc, char) => 
        char >= 'a' && char <= 'z' ? acc + (char.charCodeAt(0) - 96) : 
        char >= 'A' && char <= 'Z' ? acc + (char.charCodeAt(0) - 64) * 2 :
        char >= '0' && char <= '9' ? acc + Number(char) : acc
    , 0);
}

console.log(lettersToNumbers('Give me 5')) // 73