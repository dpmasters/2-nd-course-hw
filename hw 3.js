// // #1
// let password = 'пароль';
// let chek = String(prompt('Введите пароль'));
// if (chek === password) {
//     console.log('Пароль введен верно');
// } else {
//     console.log('Пароль введен неправильно');
// }

// // #2
// let c = 2;
// if (c >0 && c <10) {
//     console.log('Верно');
// } else {
//     console.log('Не верно');
// }

// // #3
// let d = 50;
// let e = 150;
// if (d > 100 || e > 100) {
//     console.log('Верно');
// } else {
//     console.log('Не верно');
// }

// // #4
// let a = '2';
// let b = '3';
// // Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
// alert (Number(a) + Number(b));

// // #5
// let monthNumber = Number(prompt('Введите номер месяца'));
// switch(monthNumber) {
//     case 12:
//     case 1:
//     case 2:
//         console.log('Зима')
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log('Весна')
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log('Лето')
//         break;
//     case 9:
//     case 10:
//     case 11:
//         console.log('Осень')
//         break;
//     default:
//         console.log('Такого месяца нет')
//         break;
// }

// // #7
// let chekNumber = Number(prompt('Пожалуйста, введите любое число'));
// if (chekNumber % 2 === 0) {
//     alert('Число четное');
// } else {
//     alert('Число не четное')
// }


// // #8
// let clientOS = 0;
// clientOS = (confirm('Вы испульзуете iOS?'));
// (clientOS) ? alert('Установите версию приложения для iOS по ссылке') : alert('Установите версию приложения для Android по ссылке');

// // // 9 
// let newClientOS = (confirm('Вы используете iOS?'));
// let clientDeviceYear = Number(prompt('введите год выпуска телефона'));
// let required = (clientDeviceYear >= 2015) ? (newClientOS ? 'для iOS' : 'для Android') : (newClientOS ? 'облегченную для iOS' : 'облегченную для Android');
// alert(`Установите версию приложения ${required}  по ссылке`);

