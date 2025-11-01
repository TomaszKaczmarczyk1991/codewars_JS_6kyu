function duplicateCount(text){
  const str = text.toLowerCase();
  const counts = {};
  let duplicates = 0;

  for(ch of str) {
    counts[ch] = (counts[ch] || 0) + 1;
    if(counts[ch] === 2) duplicates++;
  }
// console.log(counts) // { a: 2, b: 2, c: 1, d: 1, e: 1 }
  
return duplicates;
}

console.log((duplicateCount("aabbcde"))) // 2

