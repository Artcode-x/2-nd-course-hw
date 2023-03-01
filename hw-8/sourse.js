
//  function sort(users) {
//      for (let i = 0; i < arr.length; i++) {
//          for (let j = i; j < arr.length; j++) {
//             if (users[i].toString() > users[j].toString()) {
//              let temp = users[i];
//              users[i] = users[j];
//              users[j] = temp;
//             }
//          }
//      }
//  return users;
// } 

//task 1
/*
const arrNum = (arr) => {
    let multiOfNumbers = arr[0];
    for (let i = 1; i < arr.length; i++) {
        multiOfNumbers = multiOfNumbers * arr[i];
    }
    return multiOfNumbers;
};

const arrOther = (arr) => {   
    let sum = arr[0];   // можно было просто прировнять к 0)
    for (let i = 1; i < arr.length; i++) { // можно было и i = 0 , но так захотелось) 
        sum = sum + arr[i];   
    }
    return sum;
}

const each = (arr, call) => call(arr);

console.log(`Произведение равно: ${each([3, 4, 1, 9], arrNum)}`);
console.log(`Cумма равна: ${each([3, 4, 1, 9], arrOther)}`);
*/
// getResult ([3, 4, 1, 9], mult); //108
// getResult ([3, 4, 1, 9], sum); //17
/*
// task 2
const users = [
    { name: 'Jon', age: 22 },
    { name: 'Richard', age: 18 },
    { name: 'Anton', age: 32 },
    { name: 'Lida', age: 23 },
    { name: 'Bob', age: 44 }
];

users.sort(compareAge);
console.log(users);

function compareAge(a, b) { // сортирнул по возрасту
    if (a.age > b.age) return 1;
    if (a.age < b.age) return -1;
    return 0
}
// function compareUser(a, b) {  // сортирнул по именам
//     if (a.name > b.name) return 1; 
//     if (a.name < b.name) return -1;
//     return 0
// }



// function callback(a, b) {
//     return a - b;
// }

// users.sort(callback);
// console.log(users);
*/

/*
//task 3

const arrRev = [1, '4', 9, 'two'];
const arrTransformToNum = [1, '4', false, 9, 'two'];

const reverseArr = (arr) => arr.reverse(); //реверсируем

const translateToNum = (arr) => {
    for (i = 0; i <arr.length; i++) {
        if (arr[i] != Number) arr[i] = Number(arr[i]); // преобразуем элементы( в данном случае false) к числу
        if (isNaN(arr[i])) arr.splice(i, 1);//Начиная с индекса i, удалить 1 элемент 
        // если выпадет NaN, удаляем его // либо delete arr[i]; но будет писать пусто
    // метод .splice позволяет заменять или удалять содержимое массива,
    // удаляя или заменяя существующие эл-ты новыми 
    }
    return arr;
}

const each = (arr, call) => call(arr); 
console.log(each(arrRev, reverseArr));
console.log(each(arrTransformToNum, translateToNum));
*/
/*
// task 4
const timer = () => {
    let date = new Date();
    console.log(date); // тута выводим время дата

const interval = setInterval(() => { 
    date = Date();
    console.log(date);
}, 3 * 1000); //Выводим переменную date в задержку каждые 3 секунды
    
setTimeout(() => {  // Устанавливаем setTimeout для того чтобы сразу не очищалось все и мы увидели результат
    clearInterval(interval);   
    console.log('30 Секунд прошло'); // Во время срабатывания clearInterval выводим сообщение в консоль
    // и процесс вывода переменной date каждые 3 сек останавливается
}, 30 * 1000) // время для setTimeout 

}

timer();
*/

//task 5 
// setTimeout(() => {
//     calling();
//     beeps(talk);
//     }, 2 * 1000);


function calling() {
    console.log('Звоню!')
};

function beeps() {
    setTimeout(() => {
        console.log('Идут гудки...')
    }, 1000);
}

function talk() {
    console.log('Разговор')
}

setTimeout(() => {

    
}

 
