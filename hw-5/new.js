
// z 1
function min (a, b) {
    
    if (a < b) { 
        return a;
    } else {
        return b;
    }
}

    min(4, 8);
    min (6, 6);
    console.log(min(6, 6));
    console.log(min(4, 8));


    // z 2
let g = Number(prompt('Введите число'));
function calculate(g) {
   if (g % 2 == 0) {
     return 'число четное';
   } else {
     return 'Число нечетное';
   }
}
    
console.log(calculate(n));


// z 3
let n = Number(prompt('Введите число'));
function math(n) {
    console.log(n ** 2);
}

math(n);


// z 3.2
let num = Number(prompt('Введите число'));
function insquare(num) {
    return num * num;
}
console.log(insquare(num));



// z 4
function userAge(question) {
let userAnswer = Number(prompt(question));    
    if (userAnswer < 0) {                               
        console.log('Вы ввели неправильное значение'); // 2
    } else if (userAnswer <= 12) {
        console.log('Привет, друг!');                   // 3
    } else {
        alert('Добро пожаловать!')                  // 4
    }
}

userAge ('Сколько вам лет?')  // 1





// z 5 
function checkNum(z, x) {
    if (typeof (z) !== 'number' || typeof (x) !== 'number') {
        return 'Одно или оба значения не являются числом'

    }
    return z * x;
}
console.log(checkNum(10, 5));



// z 6
function numCheck(p) {
let numberAnswer = Number(prompt(p));
 if (!isNaN(numberAnswer)) {       // если p число
     let cube = numberAnswer ** 3;  
     return `n в кубе равняется ${cube}`;
 } else {
    console.log('Переданный параметр не является числом');
 }
}
console.log(numCheck('Введите число'));
 

