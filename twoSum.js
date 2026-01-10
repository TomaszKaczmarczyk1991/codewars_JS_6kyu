function twoSum(numbers, target) {
    for(let i = 0; i < numbers.length; i++){
        for(let j = i + 1; j < numbers.length; j++){
            if(numbers[i] + numbers[j] === target) return [i, j]
        }
    }
    return null;
}

console.log(twoSum([3, 2, 4], 6)) // [1, 2]