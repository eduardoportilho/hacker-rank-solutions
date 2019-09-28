'use strict';

const challengeIo = require('../utils/challenge-io')

function minimumAbsoluteDifference(arr) {
  const arraySize = arr.length
  const pairs = []
  for (let i = 0; i < arraySize-1; i++) {
    for (let j = i+1; j < arraySize; j++) {
      pairs.push({a:arr[i], b:arr[j]})
    }
  }
  const diffs = pairs.map(p => Math.abs(p.a - p.b))
  return Math.min(...diffs)
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
