import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let map = new Map()

  domains.forEach(item => {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1)
    } else {
      map.set(item, 1)
    }
    for (let i = 0; i < item.length; i++) {
      if (item[i] === '.') {
        console.log(map.has(item.slice(i + 1)));
        if (map.has(item.slice(i + 1))) {
          map.set(item.slice(i + 1), map.get(item.slice(i + 1)) + 1)
        } else {
          map.set(item.slice(i + 1), 1)
        }
      }
    }
  })
  let a = {}
  let arr = Array.from(map.entries())
  arr.forEach(item => {
    a['.' + item[0].split('.').reverse().join('.')] = item[1]
  })
return a
}

