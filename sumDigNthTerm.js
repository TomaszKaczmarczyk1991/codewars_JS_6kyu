function sumDigNthTerm(initVal, patternL, nthTerm) {

  for(let i = 0; i < nthTerm - 1; i++) {
    initVal += patternL[i % patternL.length];
  }
  return initVal.toString().split('').reduce((acc, digit) => acc + Number(digit), 0);
}