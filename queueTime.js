function queueTime(customers, n) {
    const time = 0
    const tills = []

    for(let i = 0; i < n; i++){
        tills.push(time)
    }

    for(let j = 0; j < customers.length; j++){
        let free = tills.indexOf(Math.min(...tills))
        tills[free] += customers[j]
    }

    return Math.max(...tills)
}

console.log(queueTime([2,2,3,3,4,4], 2)) // 9