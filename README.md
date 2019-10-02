# Hacker Rank Solutions

My solutions to the [Hacker Rank Challenges](https://www.hackerrank.com/).

## challenge-io

This project includes an utility to run a challenge solution locally. Check the example bellow:

```js
const challengeIo = require('../utils/challenge-io')

function solve(string) {
  //...
}

challengeIo.solve(
  './input.txt',
  (challenge) => {
    const testCount = challenge.readIntLine()
    const solution = []
    for (let index = 0; index < testCount; index++) {
      const string = challenge.readLine()
      solution.push(solve(string))
    }
    challenge.writeSolution(solution.join('\n'))
  }
)
```
