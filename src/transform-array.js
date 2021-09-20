import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`)

  let outputArr = []
  for (let i = 0; i < arr.length; i++) {
      
    //  console.log(arr[i]);  
    console.log(arr[i] === '--double-prev')
    if (!(arr[i] === "--discard-next" || arr[i] === '--discard-prev' || arr[i] === "--double-next" || arr[i] === '--double-prev')) outputArr.push(arr[i])
    //console.log((arr[i] !== "--discard-next" || arr[i] !== "--discard-prev" || arr[i] !== "--double-next" || arr[i] !== "--double-prev"))
    //console.log(outputArr);

    if (arr[i] === `--discard-next` && i !== arr.length - 1) {
      i++
    }

    if (arr[i] === `--discard-prev` && i !== 0) {
      // if (i > 1 && arr[i - 2] !== "--discard-next") 
      outputArr.pop()
    }

    if (arr[i] === `--double-next` && i !== arr.length - 1) {
      outputArr.push(arr[i + 1])
    }

    if (arr[i] === `--double-prev` && i !== 0) {
      outputArr.push(arr[i - 1])
    }
  }

  return outputArr
  
}

