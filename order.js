function order(words){
  const arr = [...words.split(' ')]
  const result = []

  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
      if(arr[j].includes(`${i + 1}`)) result.push(arr[j])
    }
  }
  return result.join(' ')
}


console.log(order('is2 Thi1s T4est 3a')) // Thi1s is2 3a T4est