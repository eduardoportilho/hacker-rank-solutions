'use strict';

const challengeIo = require('../utils/challenge-io')

function minimumAbsoluteDifference(arr) {
  const uniq = Array.from(new Set(arr))
  const arraySize = uniq.length
  let min = Number.POSITIVE_INFINITY
  for (let i = 0; i < arraySize-1; i++) {
    for (let j = i+1; j < arraySize; j++) {
      const diff = Math.abs(uniq[i] - uniq[j])
      min = Math.min(min, diff)
    }
  }
  return min
}

challengeIo.solve(
  './minimum-absolute-difference-in-an-array/input.txt',
  (challenge) => {
    const arraySize = challenge.readIntLine()
    const array = challenge.readIntArrayLine()
    const solution = minimumAbsoluteDifference(array)
    challenge.writeSolution(solution)
  }
)
