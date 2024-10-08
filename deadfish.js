// Return the output array, and ignore all non-op characters

function parse( data ) {
  const commands = [...data];
  let outputArr = [];
  let value = 0;

  for(let i=0; i<commands.length; i++){
    if(commands[i] === 'i') {
      value++; }
    else if(commands[i] === 'd') {
      value--; 
    }
    else if(commands[i] === 's') {
      value *= value; 
    }
    else if(commands[i] === 'o') {
      outputArr.push(value)
    }
  }  
  return outputArr;
}

console.log(parse("iiisdoso"));