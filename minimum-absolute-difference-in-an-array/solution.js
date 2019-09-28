'use strict';

const challengeIo = require('../utils/challenge-io')

function minimumAbsoluteDifference(arr) {
  arr.sort()
  let min = Math.abs(arr[0] - arr[1])
  const arraySize = arr.length
  for (let i = 1; i < arraySize-1; i++) {
    const diff = Math.abs(arr[i] - arr[i+1])
    min = Math.min(min, diff)
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
