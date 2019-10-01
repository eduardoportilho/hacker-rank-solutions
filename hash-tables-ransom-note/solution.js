'use strict';

const challengeIo = require('../utils/challenge-io')

function checkMagazine(magazine, note) {
  function wordCounter(arr) {
    const map = arr.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1
      return acc
    }, {})
    return {
      pick: (word) => {
        if (!map[word]) return false
        map[word] = map[word] - 1
        return true
      }
    }
  }

  const magazineSet = wordCounter(magazine)
  return note.every(word => magazineSet.pick(word)) ? 'Yes' : 'No'
}

challengeIo.solve(
  './hash-tables-ransom-note/input13.txt',
  (challenge) => {
    const [magazineCount, noteCount] = challenge.readIntArrayLine()
    const magazine = challenge.readStringArrayLine()
    const note = challenge.readStringArrayLine()
    const solution = checkMagazine(magazine, note)
    challenge.writeSolution(solution)
  }
)
