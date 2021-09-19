import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(friends) {
  console.log(friends)
  if (!Array.isArray(friends)) return false
  let friendsArr = []
  friends.forEach(element => {
    if (typeof element === 'string' && element !== ' ') friendsArr.push(element.trim().toUpperCase())
  });
  console.log(friendsArr);
  return friendsArr.sort().reduce((team, name) => team + name[0], '')
}
