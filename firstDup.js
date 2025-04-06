function firstDup(s) {
    let j; 
    for (let i = 0; i < s.length; i++) {
        let firstChar = s[i];
        
        for (j = i + 1; j < s.length; j++) {
            if (firstChar === s[j]) {
                return firstChar;
            }
        }
    }
    return undefined;
}