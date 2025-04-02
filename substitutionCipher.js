function SubstitutionCipher(abc1, abc2) {
    const encodeMap = new Map([...abc1].map((char, i) => [char, abc2[i]]));
    const decodeMap = new Map([...abc2].map((char, i) => [char, abc1[i]]));
    
    this.encode = str => [...str].map(char => encodeMap.get(char) || char).join('');
    this.decode = str => [...str].map(char => decodeMap.get(char) || char).join('');
}

var abc1 = "abcdefghijklmnopqrstuvwxyz";
var abc2 = "etaoinshrdlucmfwypvbgkjqxz";
   
var sub = new SubstitutionCipher(abc1, abc2);

console.log(sub.encode("abc"));
console.log(sub.decode("eta"));