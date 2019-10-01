const fs = require('fs')

const buildChallenge = (inputPath, data) => {
  const lines = data.split('\n');
  let currentLine = 0;
  console.log(`>>> Started...`)
  const time = Date.now()

  const readLine = () => lines[currentLine++]
  const readIntLine =  () => {
    return parseInt(readLine(), 10)
  }
  const readIntArrayLine = () => {
    return readLine().split(' ').map(str => parseInt(str, 10))
  }
  const writeSolution = (output) => {
    console.log(`>>> Took ${Date.now() - time} ms`)
    const outputPath = inputPath.replace(/(\.\w+$)/gi, '.out$1')
    const ws = fs.createWriteStream(outputPath);
    ws.write(output + "\n");
  }

  return {
    readLine,
    readIntLine,
    readIntArrayLine,
    writeSolution,
  }
}

module.exports = {
  solve: (inputPath, solutionFn) => {
    fs.readFile(inputPath, 'utf8', function(err, data) {
      if (err) throw err;
      const challenge = buildChallenge(inputPath, data)
      solutionFn(challenge)
    });
  }
}