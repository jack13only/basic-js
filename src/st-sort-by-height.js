import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let temp = []

  arr.forEach(item => {
    if (item !== -1) temp.push(item)
  });
  console.log(temp);
  temp.sort((a, b) => a - b)
  console.log(temp);

  return arr.map(item => {
    return item === -1 ? item : temp.shift()
  })

}
