function toCamelCase(str) {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '-' || str[i] === '_') { 
      if (i + 1 < str.length) {
        result.push(str[i + 1].toUpperCase());
        i++;
      }
    } else {
      result.push(str[i]);
    }
  }
  return result.join('');
}