function findArr(arrA, arrB, rng, wanted) {
 
 function getCounter(arr) {
  const counter = {};
  for (let num of arr) {
    counter[num] = (counter[num] || 0) + 1;
  }
  return counter;
}

  const countA = getCounter(arrA);
  const countB = getCounter(arrB);
  const common = [];

for(let i = 0; i < arrA.length; i++){
  
  if(arrB.includes(arrA[i]) && (countA[arrA[i]] > 1) && (countB[arrA[i]] > 1)
) {
    common.push(arrA[i]);
  }
}

const unique = [...new Set(common)];
const filtered = unique.filter((num) => (num >= rng[0]) && (num <= rng[1]));
  
  if(wanted === "odd"){
    return filtered.filter((num) => num % 2 !== 0).sort((a,b) => a - b);
  } else {
      return filtered.filter((num) => num % 2 === 0).sort((a,b) => a - b);
  }
}
