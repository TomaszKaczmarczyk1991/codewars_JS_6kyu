function findEvenIndex(arr) {
  let total = 0
  let leftSum = 0

  for(let num of arr){
    total += num
  }

  for(let i = 0; i < arr.length; i++){
    let rightSum = total - leftSum - arr[i]

    if(leftSum === rightSum) return i
    else leftSum += arr[i]
  }
    return -1;
}

console.log(findEvenIndex([1,2,3,4,3,2,1])) // 3