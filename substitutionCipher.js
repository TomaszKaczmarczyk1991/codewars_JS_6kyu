function SubstitutionCipher(abc1, abc2) {
    this.encode = function (str) {
        const result = [];
        for(const letter of str) {
            if(!abc1.includes(letter)) result.push(letter);
            if(abc1.includes(letter)) result.push(abc2[abc1.indexOf(letter)]);
       }
       return result.join('');
    }
    this.decode = function (str) {
        const result = [];
        for(const letter of str) {
            if(!abc2.includes(letter)) result.push(letter);
            if(abc2.includes(letter)) result.push(abc1[abc2.indexOf(letter)]);
       }
       return result.join('');
    }
  }

var abc1 = "abcdefghijklmnopqrstuvwxyz";
var abc2 = "etaoinshrdlucmfwypvbgkjqxz";
   
var sub = new SubstitutionCipher(abc1, abc2);

console.log(sub.encode("abc"));
console.log(sub.decode("eta"));

// sub.encode("abc") // => "eta"
// sub.encode("xyz") // => "qxz"
// sub.encode("aeiou") // => "eirfg"
   
// sub.decode("eta") // => "abc"
// sub.decode("qxz") // => "xyz"
// sub.decode("eirfg") // => "aeiou"
