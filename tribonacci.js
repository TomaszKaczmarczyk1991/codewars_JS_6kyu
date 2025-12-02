function tribonacci(signature,n){
  if(n === 0) return []
  if(n === 1) return [signature[0]]
  if(n === 2) return [signature[0], signature[1]]
  
  const seq = signature;
  
  for(let i = 0; i < n - 3; i++){
    let num = seq[i] + seq[i+1] + seq[i + 2]
    seq.push(num)
  }
  return seq
}