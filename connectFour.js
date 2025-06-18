// start working on...

function connectFourPlaceTokens(columns) {
  const result = [];
  const row = ['-', '-', '-', '-', '-', '-'];
  
  const toggleYR = (() => {
  let toggle = false;
  return () => {
    toggle = !toggle;
    return toggle ? 'Y' : 'R';
  };
})();

  for(let i = 0; i < 7; i++) {
    row.splice(columns[i], 1, toggleYR());
  }
  return row;
}

console.log(connectFourPlaceTokens([0,1,2,5,6]));