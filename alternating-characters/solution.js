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

// Complete the alternatingCharacters function below.
function alternatingCharacters(s) {
  let del = 0
  for(let i = 0; i < s.length - 1; i++) {
    let c1 = s.charAt(i), c2 = s.charAt(i+1)
    if (c1 === c2) {
      del++
    }
  }
  return del
}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = alternatingCharacters(s);
        console.log(result)

        // ws.write(result + "\n");
    }

    // ws.end();
}
