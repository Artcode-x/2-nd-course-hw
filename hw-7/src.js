//z1

const textString = 'Парам пам пам';
 let text = textString.toUpperCase();
     
    console.log(text);


let chitos = 'Я строка, новая строка';
console.log(chitos.toUpperCase());


//z 2
const searchStart = (arr, str) => {
    let newArr = []; // создаем новый масив , которая ф-ия потом будет возвращать
    arr.sort((index) =>  { // для выборки необходимых эл-ов, используем метод sort
        if (index.toLowerCase().(str.toLowerCase())) { //можно исп .startsWith помогает опред-ть, начинается строка с символов указанных в скобках, возвращая, true или false.
            
            newArr.push(index) // пушим/передаем что получилось в новый массив который будем возвращать
        }
});
return newArr;
}
console.log(searchStart(['Кошка', 'Котейка', 'Кит', 'Комар', 'Кондей', 'Носорог'], 'ко')); // ['кошка', 'комар']




//z 3

//z 3.1
const Number = 32.58884;

console.log('Округляем до большего целого: ', Math.ceil(Number));
console.log('Округляем до меньшего целого: ', Math.floor(Number));
console.log('округляем до ближайшего целого: ', Math.round(Number));



//z 4 ------

const number = [52, 53, 49, 77, 21, 32];


console.log(`Наибольшие числа, ${Math.max(number)}`);

console.log(`Наименьшие числа, ${Math.min(number)}`);


//z 5
// Создайте ф-ию которая будет выводить в консоль рандомное число от 1 до 10
function ranDOM(min, max) {
    
    console.log(Math.round(Math.random(ranDOM) * 10 ));
} // Math.random - возвращает псевдослучайное число в диапазоне от 0 до 1
// Math.round - округляет до целых
ranDOM();



//z 6

const getRandomArrNumbers = (numbers) => {
    const randomArrNumbers = new Array(Math.floor(numbers / 2)); // массив который мы возвращаем будет в 2 раза меньше переданного числа
        for (let i = 0; i < randomArrNumbers.length; i++) {  // значения в массиве должны быть меньше обьявленного числа
            randomArrNumbers[i] = Math.floor(Math.random() * (numbers + 1)); // округляем до меньшего и возвращаем случайное число от 0 до 1 * 7
        }
        console.log(randomArrNumbers);
}
getRandomArrNumbers(7);



//z 7
function takeRandom(a, b) {
    return Math.round(Math.random() * (b - a)) + a; // math ran генерит от 0 до 1 , умножаем 0*5 и 1*5 + 5. выходит диапазон от 5 до 10.
}
    console.log(takeRandom(5, 10));
 
    


//z 8 
let date1 = new Date();
console.log(date1);


const newDate = new Date();
console.log(newDate);





//z 9    ~ // check mself
let currentDate = new Date();    

console.log(`Сегодня - ${currentDate}`);

currentDate.setDate(currentDate.getDate() + 73);

console.log(`Через 73 дня - ${currentDate}` );


//z 10
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

let myDate = new Date(2025, 05, 14, 17, 27, 55)
let fullDate = myDate.getDate() + ' ' + months[myDate.getMonth()] + ' ' + myDate.getFullYear() + ', ' + days[myDate.getDay()];

let fullDateTime = myDate.getHours() + ':' + myDate.getMinutes() + ':' + myDate.getSeconds();

console.log('Дата: ' + fullDate);
console.log('Время: ' + fullDateTime);




//z 11
/*
let list = ['Яблоко','Груша','Дыня','Виноград','Персик', 'Апельсин','Мандарин'];
list = list.sort(() => Math.random() - 0.5);
alert(list.join(', '));

let answer = () => {
let question1 = prompt('Чему равнялся первый элемент массива?');
let question2 = prompt('Чему равнялся последний элемент массива?');
  if (question1.toLowerCase() === list[0].toLowerCase() && question2.toLowerCase() === list[list.length - 1].toLowerCase()) {
  alert('Поздравляем, вы угадали оба элемента!')
}  else if (question1.toLowerCase() === list[0].toLowerCase() || question2.toLowerCase() === list[list.length - 1].toLowerCase()) {
  alert ('Вы были близки к победе!');
} else {
  alert ('Неверный ответ')
  }
}
answer()
*/

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

const dateFull = (date) => {
    const hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    const dateRu = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear() + " - это " + days[date.getDay()];

    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) { 
        second = "0" + second; 
    }

    const result = (`Дата: ${dateRu} \nВремя: ${hour}:${minute}:${second}`);

    return result;
}

console.log(dateFull(myDate));

