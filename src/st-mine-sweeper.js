import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  const check = (a, i, j) => {
    let sum = 0
    for (let k = i - 1; k < i + 2; k++) {
      for (let m = j - 1; m < j + 2; m++) {
        if (k >= 0 && k < a.length && m >= 0 && m < a[0].length) {
          
          if (a[k][m]) {
            console.log(`a[${i}][${j}] = ${a[i][j]}`, a[k][m], k, m);
            sum++
          }
        }
      }
    }
    // console.log(sum);
    if (a[i][j]) sum--
    return sum
  }
  return matrix.map((item, indexK) => {
    return item.map((subItem, indexJ) => {
      return check(matrix, indexK, indexJ)
    })
  })
}

// console.log(check(matrix, indexK, indexJ));
