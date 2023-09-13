//Уроу 2.8
//#1
// const people = [
//     { name: 'Глеб', age: 29 },
//     { name: 'Анна', age: 17 },
//     { name: 'Олег', age: 7 },
//     { name: 'Оксана', age: 47 }
//  ];

//  function compareAge(a, b) {
//     return a.age - b.age;
//  }
//  console.log(people.sort(compareAge));


//#2
// function isPositive(num) {
//     return num > 0;
//     }
// function isMale(people) {
//     return people.gender === 'male';
//     }
// function filter(arr, ruleFunction) {
//         const filterArr = [];

//         arr.map((item) => {
//          if (ruleFunction(item)) {
//          filterArr.push(item);
//          }
//     });
//     return filterArr;
// }
    
// console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
    
// const people = [
//        {name: 'Глеб', gender: 'male'},
//        {name: 'Анна', gender: 'female'},
//        {name: 'Олег', gender: 'male'},
//        {name: 'Оксана', gender: 'female'}
//     ];
    
// console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]


//#3
// let timerTd = setInterval(() => console.log(new Date), 3000);

// setTimeout(() => {clearInterval(timerTd); console.log('30 секунд прошло');}, 30000);


//#4
// function delayForSecond(callback) {
//     setTimeout(function (), 1000) {
//   callback();
//     }
// }

// delayForSecond(function () {
//   console.log('Привет, Глеб!');
// });


//#5
// function delayForSecond(cb) {
//     setTimeout(() => {
//         console.log('Прошла одна секунда');
// 				if(cb) { 	cb(); }
//     }, 1000)
// }
// function sayHi (name) {
//     console.log(`Привет, ${name}!`);
// }
// delayForSecond(() => {
//     sayHi('Глеб');
// });