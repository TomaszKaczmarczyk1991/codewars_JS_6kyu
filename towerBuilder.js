function towerBuilder(nFloors) {
  const tower = []
  
  for(let i = nFloors; i > 0; i--){
      let str = ""
      str += "*".repeat((i * 2) -1)   
      tower.push(str)
  }
  
  for(let i = 0; i < nFloors; i++){
      tower[i] = " ".repeat(i) + tower[i] + " ".repeat(i)
  }
  return tower.reverse()
}