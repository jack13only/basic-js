import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!'

  if (!(date instanceof Date) || Object.keys(date).length) throw new Error('Invalid date!')

  let number = date.getMonth() + 1;
  switch (true) {
    case number >= 3 && number <= 5:
      return "spring";
    case number >= 6 && number <= 8:
      return "summer";
    case number >= 9 && number <= 11:
      return "autumn";
    default:
      return "winter";
  }
}