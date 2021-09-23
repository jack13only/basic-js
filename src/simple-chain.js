import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  string: '',
  output: '',
  arr: [],
  getLength() {
    return this.arr.length
  },
  addLink(value) {
    if (typeof value === 'undefined') this.arr.push('( )')
    else this.arr.push(`( ${value} )`)

    console.log('add', this.arr)

    return this
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position <= 0 || position > this.arr.length - 1) throw new ('You can\'t remove incorrect link!');
    else this.arr.splice(position - 1, 1)

    console.log('remove position', position, this.arr)

    return this
  },
  reverseChain() {
    this.arr.reverse()

    console.log('reverse', this.arr)

    return this
  },
  finishChain() {
    console.log('FINISH', this.arr)
    for (let i = 0; i < this.arr.length; i++) {
      if (i > 0 && !!(i < this.arr.length)) {this.string += '~~'}
      this.string += this.arr[i]
    }
    this.arr = []
    this.output = this.string
    this.string = ''
    return this.output
  }
};