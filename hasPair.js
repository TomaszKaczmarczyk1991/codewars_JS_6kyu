function hasPair(A, sum) {
  const seen = new Set();

  for (let i = 0; i < A.length; i++) {
    const x = sum - A[i];
    if (seen.has(x)) {
      return true;
    }
    seen.add(A[i]);
  }

  return false;
}

console.log(hasPair([1, 3, 7], 10));
