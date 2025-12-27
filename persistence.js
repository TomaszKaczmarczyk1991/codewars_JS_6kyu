function persistence(num) {
    let n = String(num)
    let counter = 0
    while(n.length > 1){
        n = n.split('').reduce((acc, val) => acc * +val, 1)
        n = String(n)
        counter++
    }
    return counter
}

console.log(persistence(39)) // 3

// 39 -> 3 * 9
// 27 -> 2 * 7
// 14 -> 1 * 4
// 4