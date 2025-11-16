function towerBuilder(nFloors) {
  const tower = []

  for(let i = nFloors; i > 0; i--){
    let str = ""
    str += "*"
    for(let j = 0; j < nFloors; j++){
      str += ' '
    }
    tower.push(str)
  }
  return tower
}

console.log(towerBuilder(3))

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]


// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]