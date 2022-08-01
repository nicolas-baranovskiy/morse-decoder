const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' ',
};

function decode(expr) {
    let res = expr.match(/.{1,10}/g).map(index => index.match(/.{1,2}/g));
  for (let i=0; i < res.length; i++){
    for ( let n = 0; n < res[i].length; n++){
      if (res[i][n] === '00'){
        res[i][n] = '';
      } else if (res[i][n] === '10') {
        res[i][n] = '.';
      } else if (res[i][n] === '11') {
        res[i][n] = '-';
      }
    }
  }
res = res.map(index => index = index.join(''));

let result = res.map(index => index = MORSE_TABLE[index]).join ('');
return result
}

module.exports = {
    decode
}