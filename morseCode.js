// Passes sample tests from description but fails on more complex tests...


const decodeMorse = function(morseCode) {
  const MORSE_CODE = {
    '.-': 'A',
    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E', 
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
    ' ': '',
    '   ': ' ',
    ".-.-.-": ".",
    "--..--": ",",
    "..--..": "?",
    ".----.": "'",
    "-.-.--": "!",
    "-..-.": "/",
    "-.--.": "(",
    "-.--.-": ")",
    ".-...": "&",
    "---...": ":",
    "-.-.-.": ";",
    ".-.-.": "+",
    "-....-": "-",
    "..--.-": "_",
    "-...-": "=",
    "...-..-": "$",
    ".--.-.": "@",
    // Special code:
    '...---...': 'SOS'
  };
  
  const code = morseCode
    .trim()
    .split(' ');

  const decoded = code.map(x => MORSE_CODE[x] || ' ')
  .toString()
  .replace(' ', '');
  
  const result = decoded.split(',').join('');
  
  return result;
}     

console.log(decodeMorse(".... . -.--   -.. ..- -.. . -.-.--"
)); // HEY DUDE! // -> OK!

console.log(decodeMorse('... --- ...')); // SOS // -> OK!

console.log(decodeMorse('...   ---   ...')) // S O  S  // -> NOK!

console.log(decodeMorse('...---... -.-.-- - .... . --.- ..- .. -.-. -.- -... .-. --- .-- -. ..-. --- -..- .--- ..- -- .--. ... --- ...- . .-. - .... . .-.. .- --.. -.-- -.. --- --. .-.-.- '));

