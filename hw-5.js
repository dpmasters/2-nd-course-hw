//#1
// const sim = (a, b) => {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }

// console.log(sim(8, 4));


//#2
// const chekNumber = (a) => {
//     if (a % 2 == 0) {
//     return ('Число четное');
//     } else {
//     return ('Число не четное');
//     }
// }

// console.log(chekNumber(7));


//#3
//3.1
// function num(a) {
//   let sqrd = a ** 2;
//   console.log(`${sqrd}`); 
// }
// num(4);

//3.2
// function sqrd(a) {
//     return a ** 2;
//   }
  
//   let result = sqrd(4);
//   alert(result);


//#4
// function ageUser () {
// const age = prompt('Сколько вам лет?');

// if (age < 0) {
//         console.log('Вы ввели неправильное значение');
//     } else if (age <= 12) { 
//         console.log('Привет, Друг!');
//     } else {
//         console.log('Добро пожаловать!');
//     }
// }

//     ageUser();


//#5
// function Numbers(num1, num2) {
//     if (num1 !== 'number' || num2 !== 'number') {
//     isNaN(num1) || isNaN(num2)
//       return 'Одно или оба значения не являются числом';
//     } else {
//       return num1 * num2;
//     }
//   };
//   console.log(Numbers(2, 5));
//   console.log(Numbers(4, 'abcd'));

//   function Numbers(num1, num2) {
//     if (typeof num1 !== 'number'  typeof num2 !== 'number'  isNaN(num1) || isNaN(num2)) {
//       return 'Одно или оба значения не являются числом';
//     } else {
//       return num1 * num2;
//     }
//   };
//   console.log(Numbers(2, 5));
//   console.log(Numbers(4, 'abcd'));