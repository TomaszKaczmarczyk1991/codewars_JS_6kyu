var uniqueInOrder=function(iterable){
  const arr = [...iterable]
  const result = []
  for(let i = 0; i < arr.length; i++){
      if(arr[i] === arr[i+1]) continue
      result.push(arr[i])
  }
  return result
}
