function duplicateCount(text){
  const str = text.toLowerCase();
  const counts = {};
  let duplicates = 0;

  for(ch of str) {
    counts[ch] = (counts[ch] || 0) + 1;
    if(counts[ch] === 2) duplicates++;
  }
  return duplicates;
}

console.log((duplicateCount("aabbcde"))) // 2