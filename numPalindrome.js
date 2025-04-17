function palindrome(num){ 
    if (!Number.isInteger(num) || num <= 0) return 'Not valid';

    const str = num.toString();

    let results = new Set();

    for(let i = 0; i < str.length; i++) {
        for(let j = i + 2; j < str.length + 1; j++) {
            let candidate = str.slice(i, j);
            if(candidate === candidate.split('').reverse().join('')
                && candidate[0] !== '0'
                && candidate[candidate.length - 1] !== '0') results.add(Number(candidate));
        }
    }

    if(results.size === 0) return "No palindromes found";
    
    return Array.from(results).sort((a, b)  => a - b);
}



console.log(palindrome(1221))

//   1221      -->  [22, 1221]
//   34322122  -->  [22, 212, 343, 22122]
//   1001331   -->  [33, 1001, 1331]
//   1294      -->  "No palindromes found"
//   "1221"    -->  "Not valid"
  