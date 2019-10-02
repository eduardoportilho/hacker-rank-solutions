'use strict';

const challengeIo = require('../utils/challenge-io')

const findClosingIndex = (s, openingIndex) => {
  const openChar = s[openingIndex]
  const closeChar = getClosingBracket(openChar)
  let inner = 0
  for (let i = openingIndex+1; i < s.length; i++) {
    const char = s[i];
    if (char === openChar) {
      inner++
    } else if(char === closeChar) {
      if (inner === 0) {
        return i
      }
      inner--
    }
  }
  return -1
}

const getClosingBracket = (opening) => {
  if (opening === '(') return ')'
  if (opening === '[') return ']'
  if (opening === '{') return '}'
  return undefined
}

function isBalanced(s) {
  if (s.length === 0) return 'YES'
  if (s.length < 2) return 'NO'
  const closing = getClosingBracket(s[0])
  if (!closing) return 'NO'
  const closingIndex = findClosingIndex(s, 0)
  if (closingIndex < 0) return 'NO'

  const inner = s.substring(1, closingIndex)
  const rest = s.substring(closingIndex + 1)
  const isInnerBalenced = isBalanced(inner)
  const isRestBalenced = isBalanced(rest)
  if (isInnerBalenced === 'YES' && isRestBalenced === 'YES') {
    return 'YES'
  }
  return 'NO'
}

challengeIo.solve(
  './balanced-brackets/input00.txt',
  (challenge) => {
    const sCount = challenge.readIntLine()
    const solution = []
    for (let index = 0; index < sCount; index++) {
      const s = challenge.readLine()
      solution.push(isBalanced(s))
    }
    challenge.writeSolution(solution.join('\n'))
  }
)
