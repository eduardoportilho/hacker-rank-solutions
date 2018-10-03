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

// Complete the isValid function below.
function isValid(s) {
  const freq = {}
  for (let index = 0; index < s.length; index++) {
    const char = s.charAt(index)
    const charFreq = freq[char] || 0
    freq[char] = charFreq + 1    
  }

  const freqList = Object.values(freq)
  if (freqList.length <= 1) {
    return 'YES'
  }
  const commonFreq = Math.min(freqList[0], freqList[1])
  let oneOff = false
  for (const charFreq of freqList) {
    if (charFreq === commonFreq) {
      continue
    }
    else if (charFreq === commonFreq + 1) {
      if (oneOff) return 'NO'
      oneOff = true
    }
    else {
      return 'NO'
    }
  }
  return 'YES'
}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = isValid(s);
    console.log(result)
    // ws.write(result + "\n");

    // ws.end();
}