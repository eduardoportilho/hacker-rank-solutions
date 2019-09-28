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

// Complete the activityNotifications function below.
function activityNotifications(expenditure, d) {
    const meds = medians(expenditure, d)
    let i = d
    let mi = 0
    let notif = 0
    while (i < expenditure.length) { 
        if (expenditure[i] >= 2 * meds[mi])
            notif++
        i++
        mi++
    }
    return notif
}

function medians(a, d) {
    let index = d
    let medians = []
    let t = new Date().getTime()
    let sub = a.slice(0, d).sort((a, b) => a - b)
    console.log(`1st sort took`, new Date().getTime() - t)

    medians.push(med(sub))
    index++
    while (index < a.length) {
        let remove = a[index - d - 1]
        let add = a[index - 1]
        update(sub, remove, add)
        medians.push(med(sub))
        index++
    }
    return medians
}

function med(a) {
    const midIdx = Math.floor(a.length/2)
    if (a.length % 2 === 0) {
        return (a[midIdx] + a[midIdx-1]) / 2
    }
    return a[midIdx]
}

function update(sorted, remove, add) {
    const removeIdx = sortedIndexOf(sorted, remove, 0, sorted.length-1)
    sorted.splice(removeIdx, 1)
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] > add) {
            sorted.splice(i, 0, add)
            return
        }
    }
    sorted.push(add)
}

function sortedIndexOf(arr, val, start, end) {
  if (start === end) {
    return arr[start] === val ? start : -1
  }
  else if (start > end)
    return -1
  const mid = start + Math.floor((end - start)/2)
  if (arr[mid] === val)
    return mid
  else if(arr[mid] < val)
    return sortedIndexOf(arr, val, start, mid-1)
  else
    return sortedIndexOf(arr, val, mid+1, end)
}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const expenditure = readLine().split(' ').map(expenditureTemp => parseInt(expenditureTemp, 10));

    let result = activityNotifications(expenditure, d);
  console.log(`>>>`, result)
    // ws.write(result + "\n");

    // ws.end();
}
