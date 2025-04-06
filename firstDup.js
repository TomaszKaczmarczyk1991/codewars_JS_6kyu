function firstDup (s) {
    const seen = new Set();
    
    for(const char of s) {
        if(seen.has(char)) return char;
        else seen.add(char);
    }
    return undefined;
  }

console.log(firstDup('translator'));