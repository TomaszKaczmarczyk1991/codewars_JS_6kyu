function duplicateEncode(word){
  return [...word.toLowerCase()].map(x => word.toLowerCase().indexOf(x) === word.toLowerCase().lastIndexOf(x) ? '(' : ')').join('')
}