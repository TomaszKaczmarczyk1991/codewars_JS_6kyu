function alphabetPosition(text) {
    return text.toLowerCase()
                .split('')
                .map(x => x.charCodeAt(0) - 96)
                .filter(x => x > 0 && x < 27)
                .join(' ')
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))