//Игра 2 - Угадай слово
function gameWords() {
   const words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

words.sort(() => Math.random() - 0.5);
const mixWords = words.join(', ');

alert(mixWords);

const firstWord = prompt('Какое первое слово в массиве?');
const lastWord = prompt('Какое последнее слово в массиве?');

if (firstWord.toLowerCase() === words[0].toLowerCase() && lastWord.toLowerCase() === words[words.length - 1].toLowerCase()) {
  alert('Поздравляем! Вы угадали оба элемента.');
} else if (firstWord.toLowerCase() === words[0].toLowerCase() || lastWord.toLowerCase() === words[words.length - 1].toLowerCase()) {
  alert('Вы были близки к победе!');
} else {
  alert('Вы ответили неверно.');
} 
}


