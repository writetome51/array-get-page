import { getPage } from './index';

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

console.log(getPage(1, 5, arr));
// --> [1,2,3,4,5]

console.log(getPage(2, 5, arr));
// --> [6,7,8,9,10]

console.log(getPage(1, 7, arr));
// --> [1,2,3,4,5,6,7]

console.log(getPage(3, 7, arr));
// --> [15,16,17,18,19,20]

// console.log(getPage(4, 7, arr));
// --> 'Error: The requested page does not exist'

console.log(getPage(1, 19, arr));
console.log(getPage(2, 2, arr));
