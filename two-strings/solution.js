'use strict';

const challengeIo = require('../utils/challenge-io')

function twoStrings(s1, s2) {
  const a1 = s1.split('').sort()
  const a2 = s2.split('').sort()
  let i = 0, j = 0
  while (i < a1.length && j < a2.length) {
    if (a1[i] === a2[j]) {
      return 'YES'
    } else if (a1[i] < a2[j]) {
      i++
    } else {
      j++
    }
  }

  return 'NO'
}

challengeIo.solve(
  './two-strings/input.txt',
  (challenge) => {
    const testCount = challenge.readIntLine()
    const solution = []
    for (let index = 0; index < testCount; index++) {
      const s1 = challenge.readLine()
      const s2 = challenge.readLine()
      solution.push(twoStrings(s1, s2))
    }
    challenge.writeSolution(solution.join('\n'))
  }
)
