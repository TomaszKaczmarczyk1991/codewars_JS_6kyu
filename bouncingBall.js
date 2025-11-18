function bouncingBall(h,  bounce,  window) {
  if(h < 0) return -1
  if(bounce <= 0 || bounce >= 1) return -1
  if(window >= h) return -1
  
  let counter = 0
  let e = Math.sqrt((h * bounce) / h)
  
   while (h > window) {
    counter++;
    h = h * bounce;
    if (h > window) counter++;
  }
  return counter
}

console.log(bouncingBall(3, 0.66, 1.5)) // 3