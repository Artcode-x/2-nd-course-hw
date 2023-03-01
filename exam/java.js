// task 1
//Используем метод split, filter и свойство length:

/*
Создайте функцию, которая принимает строку и один символ и возвращает целое число, соответствующее количеству вхождений второго аргумента в первом.
Создайте функцию, которая принимает строку и один символ и возвращает целое число, соответствующее количеству вхождений второго аргумента в первом.
Если вхождений не найдено, должно быть возвращено число 0.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
str_count("Hello", 'o'); // returns 1
str_count("Hello", 'l'); // returns 2
str_count("", 'z'); // returns 0
*/



strCount("Hello", 'o'); // returns 1
strCount("Hello", 'l'); // returns 2
strCount("", 'z'); // returns 0  
  
function strCount(str, letter){  
return str.split(letter).length - 1;
}


// task 2

// Использовать map и reduce:

/*

Завершите функцию квадратной суммы, чтобы она возводила в квадрат каждое переданное ей число, а затем суммировала результаты.

Например, for [1, 2, 2]он должен возвращаться 9, потому что
1
2
+
2
2
+
2
2
"="
9
1 
2
 +2 
2
 +2 
2
 "="9.
*/

let numbers = [1, 2, 2];

function squareSum(numbers){
    var result = 0;
    for (var i =0; i < numbers.length; i++) {
        result += (numbers[i] * numbers[i]);
    }
    return result;
    }

/*
const arr = [1, 2, 2];
let new_arr = arr.map(toQuare => toQuare * toQuare);
 let sum = new_arr.reduce(function (currentSum, currentNumber) {
    return currentSum + currentNumber
}, 0)
console.log(new_arr);
console.log(sum);
*/


// task 3

// Math.sqrt и условное ветвление:

/*
Ваша задача состоит в том, чтобы найти ближайшее квадратное число nearest_sq(n)или nearestSq(n)положительное целое число n.

Например, если n = 111, то nearest\_sq(n)( nearestSq(n)) равно 121, так как 111 ближе к 121, квадрату 11, чем 100, квадрату 10.

Если это nуже идеальный квадрат (например n = 144, n = 81, и т. д.), вам нужно просто вернуть n.
*/

function nearestSq(n){
  let x = Math.round(Math.sqrt(n))**2;
  return x;
}


// task 4

// Split, reverse, join:

/*
Завершите решение так, чтобы оно перевернуло переданную в него строку.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

function solution(str){
  return str.split("").reverse().join("");
}
solution('world', 'word')

// task 5

//Split, length, map:

/*
Что, если нам нужно, чтобы длина слов, разделенных пробелом, была добавлена ​​в конце того же слова и возвращена в виде массива?

Пример (ввод --> вывод)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Ваша задача — написать функцию, которая принимает строку и возвращает массив/список с длиной каждого слова, добавленного к каждому элементу.

Примечание. Строка будет содержать как минимум один элемент; слова всегда будут разделены пробелом.
*/


function addLength(str) {
let x = str.split(' ').map(word => word + " " + word.length)
//word это то имя, которое будет использоваться при работе с элементами строки в данном случае. 
//так как наша стрелочная функция имеет всего один параметр — мы можем обойтись без круглых скобок при её объявлении.

return x;
}
addLength("apple ban");
addLength("you will win");

// task 6

//Арифметические операторы, условное ветвление:

/*
Есть предложение «3 по цене 2» (или «2+1» , если хотите) на манго. Для данного количества и цены (за манго) рассчитайте общую стоимость манго.

Примеры
mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free
*/

function mango(quantity, price) {
	return price * (quantity - Math.floor(quantity / 3)); // Метод Math.floor () - округление вниз. 
//Округляет аргумент до ближайшего меньшего целого
  //
}
mango(2, 3)
mango(3, 3)
mango(5, 3)
mango(9, 5)

//task 7

//Арифметические операторы, Math.floor():

/*
Натан любит кататься на велосипеде.

Поскольку Натан знает, как важно избегать обезвоживания, он выпивает 0,5 литра воды за час езды на велосипеде.

Вам дается время в часах, и вам нужно вернуть количество литров, которые выпьет Натан, округленное до наименьшего значения.

Например:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5
*/

function litres(time) {
  return Math.floor(time/2); 
// когда вызовем 1 раз ф-ию, время 3 часа / 2 и округляем вниз. = 1 литр 
// когда вызовем 2 раз ф-ию, время 6.7 часов / 2 и округляем вниз. = 3 литра 
// когда вызовем 3 раз ф-ию, время 11.8 часов / 2 и округляем вниз. = 5 литров
}
litres(3)
//1 ответ
litres(6.7)
//3 ответ
litres(11.8)
// 5 ответ


//task 8

// map(), условный оператор:

/*
Учитывая набор чисел, верните добавку, обратную каждому из них. Каждое положительное становится отрицательным, а отрицательное становится положительным.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
Можно предположить, что все значения являются целыми числами. Не изменяйте входной массив/список.
*/

function invert(array) {
let result = array.map(numbers => numbers * -1);

   return result;
}

invert([1,2,3,4,5]) 
invert([1,-2,3,-4,5]) 
invert([])

//создаем функцию, invert, которая принимает массив чисел. (из коллбэка)
//Мы сопоставляем наш массив и для каждого числа в нем умножаем его на -1. (c помощью метода map)
//Затем мы возвращаем наш новый массив.


//task 9

// Цикл, Math.pow():

/*
Завершите функцию, которая принимает неотрицательное целое число nв качестве входных данных и возвращает список всех степеней 2с показателем степени от 0до n( включительно ).

Примеры
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
*/

/*function powersOfTwo(n){
  let xArr = [];
  for(i = 0; i<=n; i++){
    return xArr.push(2**i);
  }

  push.x(n);
}


//for (var i=0; i<=n; i++){
 //   return myArray.push(2**i);

//Math.pow(base, exponent)
*/

function powersOfTwo(n){
  let xArr = [];
  for (var i = 0; i <= n; i++){
    xArr.push(2**i); // добавляем эл-ты в массив xArr
// Оператор возведения в степень ( **)
// возвращает результат возведения первого операнда в степень второго операнда.
  }
  return xArr  // либо console.log(`${xArr}`); 
}

const result = powersOfTwo(2)

//task 10

// length, условный оператор, reduce:

/*
Учитывая непустой массив целых чисел, вернуть результат умножения значений вместе по порядку. Пример:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

*/

/*  const grow = [1, 2, 3, 4];

const ymnoj = grow.reduce(function(num, num2) {
    return num * num2
})
 console.log(ymnoj);

*/
/*
 function grow(x){
    
grow.reduce(function(num, num2) {
    return num * num2
})

 
 grow([1, 2, 3, 4])
*/

/* 
 function grow(x){
 x.reduce(function (num, num2) {
     return num * num2
 })
     
 
 
 }
  grow([1, 2, 3, 4]);
*/

    function grow(x){
 let result = x.reduce((num, num2) => num * num2);
 return result;
     console.log(result);
 }
  grow([1, 2, 3, 4]);

// ниже черновик

// task 1 
strCount("Hello", 'o'); // returns 1
strCount("Hello", 'l'); // returns 2
strCount("", 'z'); // returns 0  
  
function strCount(str, letter){  
x = str.split(letter).length - 1;
  console.log(x);
}

// task 2
const arr = [1, 2, 2];
let new_arr = arr.map(toQuare => toQuare * toQuare);
 let sum = new_arr.reduce(function (currentSum, currentNumber) {
    return currentSum + currentNumber
}, 0)
console.log(new_arr);
console.log(sum);

/*

const arr = [1, 2, 2]; 
let new_arr = arr.map(toQuare => toQuare * 2); 
 let sum = new_arr.reduce(function (currentSum, currentNumber) { 
    return currentSum + currentNumber 
}, 0) 
console.log(new_arr); 
console.log(sum);
*/

// task 3 mode
const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);

//task 4
function solution(str){ 
    return str.split('').reverse().join(''); 
} 
solution('world', 'word');

