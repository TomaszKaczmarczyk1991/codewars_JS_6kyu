function thanosSort(arr) {
  if(arr.length === 0) return 0
  if(arr.length === 1) return 1

  let isSorted = true

  for(let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      isSorted = false
      break
    }
  }

  if (isSorted) return arr.length

  const mid = Math.ceil(arr.length / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)

  const leftResult = thanosSort(left)
  const rightResult = thanosSort(right)

  return Math.max(leftResult, rightResult)
}