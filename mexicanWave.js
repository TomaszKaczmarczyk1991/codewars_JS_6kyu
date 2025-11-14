function wave(str){
  const first = []
  const result = []
  
  for(let i = 0; i < str.length; i++){
    if(str[i] === ' ') continue
    let word = str.toLowerCase().split('')
    word[i] = word[i].toUpperCase()
    result.push(word.join(''))    
  }
  return result;
}
console.log(wave(" s p a c e s "))

/* Output: [
  " S p a c e s ",
  " s P a c e s ",
  " s p A c e s ",
  " s p a C e s ",
  " s p a c E s ",
  " s p a c e S "
]
*/