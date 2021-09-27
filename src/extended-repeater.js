import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let output = ''
  options.separator = options.separator || '+'
  options.additionSeparator = options.additionSeparator || '|'
  options.addition === undefined ? options.addition = '' : options.addition = String(options.addition)

    if (options.additionRepeatTimes !== undefined) {
      for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
        str += options.addition + options.additionSeparator
      }
      str += options.addition
    } else {
      str += options.addition
    }

    if (options.repeatTimes !== undefined) {
      for (let i = 0; i < options.repeatTimes - 1; i++) {
        output += str + options.separator
      }
      output += str
    } 
  
  return output || str
}


// Ваша задача — реализовать функцию `repeater(str, options)`.
// Эта функция возвращает повторяющуюся **строку**, основываясь на заданных параметрах:
// *	`str` это **строка**, которая будет повторена
// *	`options` это **объект** опций, который содержит следующие свойства:
//   - `repeatTimes` устанавливает число повторений `str`
//   - `separator` это строка, разделяющая повторения `str`
//   - `addition` это дополнительная строка, которая будет добавлена после каждого повторения `str`
//   - `additionRepeatTimes` устанавливает число повторений `addition`
//   - `additionSeparator` это строка, разделяющая повторения `addition`
//   Например: `repeater('STRING', 
//   { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })`
//    => `'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'`