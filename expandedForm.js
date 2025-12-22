function expandedForm(num) {
  const str = String(num)
  const result = []

  for(let i = 0; i < str.length; i++){
    if(str[i] === '0') continue
    result.push(str[i] + '0'.repeat(str.length - i - 1))
  }
  return result.join(' + ')
}

console.log(expandedForm(70304)) // 70000 + 300 + 4