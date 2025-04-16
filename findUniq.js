function findUniq(arr) {
    const counts = {};
  
    for (let num of arr) {
      counts[num] = (counts[num] || 0) + 1;
    }

    for (let num in counts) {
      if (counts[num] === 1) return Number(num);
    }
}
  
  console.log(findUniq([1, 1, 1, 2, 1, 1])); // 2