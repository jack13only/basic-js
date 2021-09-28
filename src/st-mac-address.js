import { NotImplementedError } from '../extensions/index.js';

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(n) {
  // `isMAC48Address('00-1B-63-84-45-E6')`
  let arr = n.split('-')
  if (arr.length !== 6) return false
  let validate = '0123456789ABCDEF'

  const valid = (a) => {
    if (a.length !== 1) a.split('').every(valid)
    return validate.includes(a[0])
  }
  return arr.every(valid);
}
