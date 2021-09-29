import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

 export default class VigenereCipheringMachine {

  constructor(reverse = true) {
    this.reverse = reverse;
    this.alf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  position(a, b) {
    // console.log(a, b);
    return a + b > 25 ? a + b - 26 : a + b
  }

  encrypt(str, key) {
    if (str === undefined || key === undefined) throw new Error(`Incorrect arguments!`)


    let kF = 0;
    let keyFull = ''
    let output = ''

    for (let i = 0; i < str.length; i++) {
      if (kF === key.length) kF = 0

      keyFull += key[kF]
      kF++
    }

    // console.log(keyFull);

    str = str.toUpperCase()
    keyFull = keyFull.toUpperCase()


    let j = 0

    for (let i = 0; i < str.length; i++) {
      if (this.alf.indexOf(str[i]) === -1) {
        output += str[i]
      } else {
        // console.log(this.position(alf.indexOf(str[i]), alf.indexOf(keyFull[j])));
        output += this.alf[this.position(this.alf.indexOf(str[i]), this.alf.indexOf(keyFull[j]))];
        j++
      }
    }
   
    return this.reverse ? output : output.split('').reverse().join('')
    
  }

  decrypt(str, key) {
    if (str === undefined || key === undefined) throw new Error(`Incorrect arguments!`)

    let kF = 0;
    let keyFull = ''
    let output = ''

    for (let i = 0; i < str.length; i++) {
      if (kF === key.length) kF = 0

      keyFull += key[kF]
      kF++
    }

    str = str.toUpperCase()
    keyFull = keyFull.toUpperCase()


    let j = 0

    for (let i = 0; i < str.length; i++) {
      if (this.alf.indexOf(str[i]) === -1) {
        output += str[i]
      } else {
        output += this.alf[this.position(this.alf.indexOf(str[i]) - this.alf.indexOf(keyFull[j]), 26)];
        // console.log(this.position(this.alf.indexOf(str[i]) - this.alf.indexOf(keyFull[j]), 26));
        j++
      }
    }
    
    return this.reverse ? output : output.split('').reverse().join('')

  }
}


