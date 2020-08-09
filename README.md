# getPage(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pageNumber,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;itemsPerPage,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<br>): any[]

Paginates the data in `array`.  
`array` is never modified.

## Examples
```js
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

console.log(getPage(1, 5, arr));
// --> [1,2,3,4,5]

console.log(getPage(2, 5, arr));
// --> [6,7,8,9,10]

console.log(getPage(1, 7, arr));
// --> [1,2,3,4,5,6,7]

console.log(getPage(3, 7, arr));
// --> [15,16,17,18,19,20]

console.log(getPage(4, 7, arr));
// --> 'Error: The requested page does not exist'

console.log(getPage(1, 19, arr));
// --> [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]

console.log(getPage(2, 19, arr));
// --> [20]
```



## Installation
`npm i  @writetome51/array-get-page`

## Loading
```js
import { getPage } from '@writetome51/array-get-page';
```


## License
[MIT](https://choosealicense.com/licenses/mit/)
