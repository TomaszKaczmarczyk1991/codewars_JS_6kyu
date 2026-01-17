function encode(string) {
    const vowels = { a: 1, e: 2, i: 3, o: 4, u: 5 }
    const encoded = []
    
    for(let i = 0; i < string.length; i++){
        if(vowels.hasOwnProperty(string[i])) encoded.push(vowels[string[i]])
        else encoded.push(string[i])
    }
    return encoded.join('')
}

function decode(string) {
    const vowels = { 1:'a', 2:'e', 3:'i', 4:'o', 5:'u' };
    const decoded = [];

    for (let i = 0; i < string.length; i++) {
        if (vowels.hasOwnProperty(string[i])) {
            decoded.push(vowels[string[i]]);
        } else {
            decoded.push(string[i]);
        }
    }

    return decoded.join('');
}

console.log(encode('test')) // t2st
console.log(decode('t2st')) // test