function sortArray(array) {
  const oddArr = []
  const result = []
  let idx = 0;
  
  for(let x of array){
      if(x % 2 !== 0) oddArr.push(x)
  }
  
  const sorted = oddArr.sort((a ,b) => a - b)
  
  for(let y of array){
      if(y % 2 !== 0){
      result.push(sorted[idx])
      idx++
      }
      else result.push(y)
  }
  return result
}