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

// Complete the whatFlavors function below.
function whatFlavors(cost, money) {
    const sorted = cost
        .map((cost, index) => ({ cost, index }))
        .sort((a, b) => a.cost - b.cost)

    let ia = 0, ib = sorted.length - 1
    while (ia < ib) {
        let sum = sorted[ia].cost + sorted[ib].cost
        if(isNaN(sum)) {
          console.log(`=`, ia, ib, sorted[ia], sorted[ib], sum )
        }
        if (sum === money) {
            console.log([sorted[ia].index+1, sorted[ib].index+1].sort((a, b) => a - b).join(' '))
            return
        }
        else if (sum > money) {
            ib--
        } else {
            ia++
        }
    }
    console.log(`Invalid input`)
}

function main() {
    let t = parseInt(readLine(), 10);
    // t = 1

    for (let tItr = 0; tItr < t; tItr++) {
        const money = parseInt(readLine(), 10);

        const n = parseInt(readLine(), 10);

        const cost = readLine().split(' ').map(costTemp => parseInt(costTemp, 10)).slice(0, n);

        whatFlavors(cost, money);
    }
}
