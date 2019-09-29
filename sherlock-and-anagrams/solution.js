'use strict';

const challengeIo = require('../utils/challenge-io')

function sherlockAndAnagrams(s) {
  let size = 1
  let aCount = 0
  while (size < s.length) {
    aCount += countAnagramsOfSize(s, size)
    size++
  }
  return aCount
}

function countAnagramsOfSize(s, size) {
  let aCount = 0
  for (let i = 0; i < s.length - size; i++) {
    const s1 = s.substring(i, i+size)
    for (let j = i+1; j <= s.length - size; j++) {
      const s2 = s.substring(j, j+size)
      if (isAnagram(s1, s2)) {
        aCount++
      }
    }
  }
  return aCount
}

function isAnagram(s1, s2) {
  const ss1 = s1.split('').sort().join('')
  const ss2 = s2.split('').sort().join('')
  return ss1 === ss2
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
