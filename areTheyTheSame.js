function comp(array1, array2){
    if (!array1 || !array2) return false;
    
    array1 = array1.map(x => x*x).sort((a,b)=>a-b);
    array2 = array2.sort((a,b)=>a-b);
    
    return JSON.stringify(array1) === JSON.stringify(array2);
}

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361])) // true