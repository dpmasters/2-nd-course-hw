//#1
// const numbs = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < numbs.length; i++) {
// 	if (numbs[i] == 10) break;
// 	console.log(numbs[i]);
// }


//#2
// const numbers = [1, 5, 4, 10, 0, 3];

// numbers.indexOf(4);


//#3
// let numb = [1, 3, 5, 10, 20];

// numb = numb.join(' ');
// console.log(numb);


//#4
// let arr = [];
// for (let i = 0; i < 3; i++) 
// {
//     arr[i] = [];
//     for (let j = 0; j < 3; j++)
//     {
//         arr[i][j] = j + 1;
//     }
//     }
//     console.log(arr);


//#5
// let num = [1, 1, 1];
// num.push(2, 2, 2);
// console.log(num);


//#6
// const array = [9, 8, 7, 'a', 6, 5];
// array.sort();
// for (let i = array.length - 1; i >= 0; i--) {
//   if (typeof array[i] === 'string') {
//     array.splice(i, 1);
//   }
// }
// console.log(array);

//#7
// let number = [9, 8, 7, 6, 5];
// let search = number.includes(Number(prompt('Угадай число')));
// if (search = true) {
// console.log('Угадал');
// }
// else {
// console.log('Не угадал');
// }

//#8
// let str = 'abcdef';
// let arrayStr = str.split('');
// arrayStr.reverse();
// console.log(arrayStr);

//#9
// let arr = [[1, 2, 3,],[4, 5, 6]];
// arr.flat();

//#10
// let numbs = [1, 2, 3, 4, 5, 7, 9, 10];
// for(let i = 0; i < numbs.length - 1; i++){
// console.log(numbs[i] + numbs[i +1]);
//   }

//#11
// const numbers = [1, 2, 3];
// function doubleNumbers(numbers) {
//     return numbers.map(x => x ** 2);
// }
// console.log(doubleNumbers(numbers));

//#12
// function nameLength(str) {
//     const words = str.split(" ");
//     return words.map(str => `${str.length}`);
// }
// console.log(nameLength("skypro word"));

//#13
// function filterPositive(array) {
//     const negatives = array.filter(x => x < 0);
//     return negatives;
// }
// filterPositive([-1, 0, 5, -10, 56]);
// filterPositive([-25, 25, 0, -1000, -2]);

