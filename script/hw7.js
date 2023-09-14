
// Урок 2.7
//#1
// let str = 'js';
// console.log(str.toUpperCase());


//#2
// function searchStart(arr, str) {
// let resultArray=[];
//     arr.forEach(element => {
//       if (element.toLowerCase().startsWith(str)) {
//         resultArray.push (element.toLowerCase())
//       }  
//     });
//     return resultArray;
// }

// searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); // ['кошка', 'комар']
// searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); // ['груша']
// searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); // []


//#3
// let num = (32.58884);
// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.round(num));


//#4
// let numbers = [52, 53, 49, 77, 21, 32];
// let max = Math.max(...numbers);
// let min = Math.min(...numbers);
// console.log(`Максимальное число ${max}`);
// console.log(`Минимальное число ${min}`);



//#5
// Math.round(Math.random() * 10);


//#6
// function getRandomArrNumbers (n) {
//     const length = n / 2;
//     let array = [];

//     for (i = 1; i <= length; i++) {
//         array.push(Math.round(Math.random() * n)); 
//     }
//     return array;
// }
// getRandomArrNumbers(7);
// getRandomArrNumbers(12);


//#7
// function getRandomNumbs(minValue, maxValue) {
//     return Math.round(Math.random() * (maxValue - minValue)) + minValue;
    
// }
// getRandomNumbs(2, 7);


//#8
// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
// let myDate = new Date();
// let fullDate = "Сегодня: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + ", " + days[myDate.getDay()];

// console.log(fullDate);


//#9
// let currentDate = new Date();
// currentDate.setDate(currentDate.getDate() + 73);

// console.log(currentDate);


//#10
// function formatDate(date) {
//     const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
//     const daysWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
//     const dayWeek = daysWeek[date.getDay()];
    
//     const formattedDate = `Дата: ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} - это ${dayWeek}.`;
//     const formattedTime = `Время: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    
//     return `${formattedDate}\n${formattedTime}`;
//   }
  
//   console.log(formatDate(new Date));


//#11
// function gameWords() {
//     const words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
 
//  words.sort(() => Math.random() - 0.5);
//  const mixWords = words.join(', ');
 
//  alert(mixWords);
 
//  const firstWord = prompt('Какое первое слово в массиве?');
//  const lastWord = prompt('Какое последнее слово в массиве?');
 
//  if (firstWord.toLowerCase() === words[0].toLowerCase() && lastWord.toLowerCase() === words[words.length - 1].toLowerCase()) {
//    alert('Поздравляем! Вы угадали оба элемента.');
//  } else if (firstWord.toLowerCase() === words[0].toLowerCase() || lastWord.toLowerCase() === words[words.length - 1].toLowerCase()) {
//    alert('Вы были близки к победе!');
//  } else {
//    alert('Вы ответили неверно.');
//  } 
//  }
 
 