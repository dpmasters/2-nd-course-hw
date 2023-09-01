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
//   function Numbers(num1, num2) {
//     if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
//       return 'Одно или оба значения не являются числом';
//     } else {
//       return num1 * num2;
//     }
//   };
//   console.log(Numbers(2, 5));
//   console.log(Numbers(4, 'abcd'));


//#6
// function cubeNumber() {
//   const chekNum = prompt("Введите число:");
//   const num = parseFloat(chekNum);
//   if (!isNaN(num)) {
//     const cube = num ** 3;
//     return `${num} в кубе равняется ${cube};`
//   } else {
//     return 'Переданный параметр не является числом';
//   }
// };
// for (let i = 0; i <= 10; i++) {
//   console.log(cubeNumber(i));
// };


  //#7
// const circle1 = {
//     radius: 5,
//     getArea() {
//         return Math.PI * (circle1.radius ** 2);
//     }
//   };

//   const circle2 = {
//     radius: 20,
//     getPerimeter() {
//         return 2 * Math.PI * circle2.radius;
//     }
//   };

//   console.log(circle1.getArea());
//   console.log(circle2.getPerimeter());

//#8
// function season () {
//     const month = prompt('Введите номер месяца от 1 до 12');

//     if (month >= 1 && month <= 2 || month == 12) {
//         console.log('это Зима');
//     } else if (month >= 3 && month <= 5) { 
//         console.log('это Весна');
//     } else if (month >= 6 && month <= 8) {
//         console.log('это Лето');
//     } else if (month >= 9 && month <= 11) {
//         console.log('это Осень'); 
//     } else {
//         console.log('вы ввели не верную информацию');
//     }
// }

// season();