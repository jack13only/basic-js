import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  if (str === '') return ''
  let output = ''
  let n = 1
  let s = str[0]
  for (let i = 1; i < str.length; i++) {
    if (s === str[i]) {
      n++
    } else {
      output += (n === 1 ? '' : n) + s
      s = str[i]
      n = 1
    }
  }
  output += (n === 1 ? '' : n) + s
  return output
}
