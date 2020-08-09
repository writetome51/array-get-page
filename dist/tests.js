import {getPage} from './index.js';
import {arraysMatch} from '@writetome51/arrays-match';


let result = getPage(1, 1, [1]);
if (arraysMatch(result, [1])) console.log('test 1 passed');
else console.log('test 1 FAILED');


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
result = getPage(1, 5, arr);
if (arraysMatch(result, [1, 2, 3, 4, 5])) console.log('test 2 passed');
else console.log('test 2 FAILED');


result = getPage(2, 5, arr);
if (arraysMatch(result, [6, 7, 8, 9, 10])) console.log('test 3 passed');
else console.log('test 3 FAILED');


result = getPage(1, 7, arr);
if (arraysMatch(result, [1, 2, 3, 4, 5, 6, 7])) console.log('test 4 passed');
else console.log('test 4 FAILED');


result = getPage(3, 7, arr);
if (arraysMatch(result, [15, 16, 17, 18, 19, 20])) console.log('test 5 passed');
else console.log('test 5 FAILED');


result = getPage(1, 19, arr);
if (arraysMatch(result, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]))
	console.log('test 6 passed');
else console.log('test 6 FAILED');


result = getPage(2, 19, arr);
if (arraysMatch(result, [20])) console.log('test 7 passed');
else console.log('test 7 FAILED');


let errTriggered = false;
try {
	getPage(4, 7, arr);
} catch (e) {
	errTriggered = true;
}
if (errTriggered) console.log('test 8 passed');
else console.log('test 8 FAILED');


errTriggered = false;
try {
	getPage(1, 5, 'abcdefghijklmnopqrstuvwxyz');
} catch (e) {
	errTriggered = true;
}
if (errTriggered) console.log('test 9 passed');
else console.log('test 9 FAILED');


errTriggered = false;
try {
	getPage(1, 1, []);
} catch (e) {
	errTriggered = true;
}
if (errTriggered) console.log('test 10 passed');
else console.log('test 10 FAILED');


errTriggered = false;
try {
	getPage(-1, 1, [1]);
} catch (e) {
	errTriggered = true;
}
if (errTriggered) console.log('test 11 passed');
else console.log('test 11 FAILED');


errTriggered = false;
try {
	getPage(1, 0, [1]);
} catch (e) {
	errTriggered = true;
}
if (errTriggered) console.log('test 12 passed');
else console.log('test 12 FAILED');


errTriggered = false;
try {
	getPage(1, -1, [1]);
} catch (e) {
	errTriggered = true;
}
if (errTriggered) console.log('test 13 passed');
else console.log('test 13 FAILED');
