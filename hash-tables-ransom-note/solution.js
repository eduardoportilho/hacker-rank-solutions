'use strict';

const challengeIo = require('../utils/challenge-io')

function checkMagazine(magazine, note) {
  const magazineSet = new Set(magazine)
  return note.every(word => magazineSet.delete(word)) ? 'Yes' : 'No'
}

challengeIo.solve(
  './hash-tables-ransom-note/input.txt',
  (challenge) => {
    const [magazineCount, noteCount] = challenge.readIntArrayLine()
    const magazine = challenge.readStringArrayLine()
    const note = challenge.readStringArrayLine()
    const solution = checkMagazine(magazine, note)
    challenge.writeSolution(solution)
  }
)
