'use strict';

var fs = require('fs')
  , filename = process.argv[2];

let inputString = '';
let currentLine = 0;

fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  inputString = data.split('\n');
  main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the makeAnagram function below.
function makeAnagram(a, b) {
  const aChars = a.split('').sort()
  const bChars = b.split('').sort()
  let diff = 0, ia = 0, ib = 0

  while (ia < aChars.length || ib < bChars.length) {
    if (ia >= aChars.length) {
      ib++; diff++; continue
    }
    if (ib >= bChars.length) {
      ia++; diff++; continue
    }
    let aChar = aChars[ia], bChar = bChars[ib]
    if (aChar === bChar) {
      ia++; ib++
    } else {
      diff++
      if(aChar > bChar) {
        ib++
      } else {
        ia++
      }
    }
  }
  return diff
}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine();

    const b = readLine();

    const res = makeAnagram(a, b);
    console.log(`>>>`, res)

    // ws.write(res + '\n');

    // ws.end();
}
