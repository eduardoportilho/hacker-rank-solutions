'use strict';

const challengeIo = require('../utils/challenge-io')

function sherlockAndAnagrams(s) {
  let size = 1
  let aCount = 0
  while (size < s.length) {
    const count = countAnagramsOfSize(s, size)
    aCount += count
    size++
  }
  return aCount
}

function countAnagramsOfSize(s, size) {
  const substrings = []
  for (let i = 0; i <= s.length - size; i++) {
    const sorted = s.substring(i, i+size).split('').sort().join('')
    substrings.push(sorted)
  }
  const repetitionCount = countRepetitions(substrings)
  return repetitionCount.reduce((acc, val) => {
    return acc + combinations2(val)
  }, 0)
}

function countRepetitions(arr) {
  arr.sort()
  if (arr.length < 2) return []
  let i = 1, 
    currentVal = arr[0],
    currentValCount = 1,
    repetitionCount = []

  while (i < arr.length) {
    if (arr[i] === currentVal) {
      currentValCount++
    } else {
      if (currentValCount > 1) {
        repetitionCount.push(currentValCount)
        currentValCount = 1
      }
      currentVal = arr[i]
    }
    i++
  }
  if (currentValCount > 1) {
    repetitionCount.push(currentValCount)
  }
  return repetitionCount
}

function combinations2(n) {
  if (n === 1) return 1
  return factorial(n) / (2*factorial(n-2))
}

const f = [0, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800, 479001600, 6227020800]
// const f = []
function factorial (n) {
  if (n === 0 || n === 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
} 


challengeIo.solve(
  './sherlock-and-anagrams/input.txt',
  (challenge) => {
    const testCount = challenge.readIntLine()
    const solution = []
    for (let index = 0; index < testCount; index++) {
      const s = challenge.readLine()
      solution.push(sherlockAndAnagrams(s))
    }
    challenge.writeSolution(solution.join('\n'))
  }
)
