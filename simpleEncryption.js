function encrypt(text, n) {
    if (!text || typeof text !== "string") return text
    if (n <= 0 || text.length === 0) return text

    let str = text

    for (let i = 0; i < n; i++) {
        const odds = [...str].filter((_, idx) => idx % 2 === 1)
        const evens = [...str].filter((_, idx) => idx % 2 === 0)
        str = odds.join('') + evens.join('')
    }
    return str
}

function decrypt(encryptedText, n) {
    if (n <= 0 || encryptedText.length === 0) return encryptedText;

    let str = encryptedText;

    for (let i = 0; i < n; i++) {
        const mid = Math.floor(str.length / 2);
        const firstHalf = str.slice(0, mid);
        const secondHalf = str.slice(mid);

        let result = [];
        let firstHalfIdx = 0;
        let secondHalfIdx = 0;

        for (let j = 0; j < str.length; j++) {
            if (j % 2 === 0) {
                result.push(secondHalf[secondHalfIdx++]);
            } else {
                result.push(firstHalf[firstHalfIdx++]);
            }
        }
        str = result.join('');
    }
    return str;
}

console.log(encrypt("012345", 2)) // 304152
console.log(decrypt("304152", 2)) // 012345

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"