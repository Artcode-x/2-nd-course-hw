//z 1

let searchNum = [1, 5, 4, 10, 0, 3];

for ( i = 0; i < searchNum.length; i++) {
    if (searchNum[i] === 10) {
        break;
    }
    console.log(searchNum[i]);
}

//z 2
let searchNums = [1, 5, 4, 10, 0, 3];
console.log(searchNums.indexOf(4));

//z 3
let splitNum = [1, 3, 5, 10, 20];
splitNum = splitNum.join(' ');
console.log(splitNum);


//z 4 
let genValues = [];
let evenNum = [];
for (let i = 0; i < 10 ; i++) {
    genValues[i] = Math.round(Math.random() * 10); // без умножения на 10 будут нули (только дробная часть). Для получения целыъ чисел
    if (genValues[i] % 2 == 0) {  // если делится без остатка на 2 
        evenNum.push(genValues[i]); // добавляем во второй массив
    }
}
console.log(genValues);
console.log(evenNum);

//z 5 
let multi = [];
for (let i = 0; i < 3; i++) {
    multi[i] = [];
for (let g = 0; g < 3; g++) {
    multi[i].push(1);
}

}
   
console.log(multi);


//z 6
let pushEnd = [1, 1, 1];
pushEnd.push(2, 2, 2);
console.log(pushEnd);


//z 7
let sortArr = [9, 8, 7, 'a', 6, 5];
sortArr.sort();
sortArr.pop('');
console.log(sortArr);


//z 8
let keyArr = [9, 8, 7, 6, 5];
let num = Number(prompt('Введите число от 1 до 10'));
if (keyArr.includes(num)) {
    console.log('Данное число есть в массиве'); 
} else { 
    console.log('нет такого в массиве');
}


//z 9
let string = 'abcdef';
let reverseString = string.split('');
reverseString.reverse();
let ready = reverseString.join('');
console.log(ready);



//z 10

const sixnumArr = new Array(6);

const randomArr = (arr) => {
    for (let k=0, min = 1, max = 10; k < arr.length; k++) {
        arr[k] = Math.round(Math.random() * (max - min)) + min;
    }
}
    const averagenumArr = (arr) => {
        let sum = 0;
        for (let k = 0; k < arr.length; k++) {
            sum += arr[k];
        }
        return sum / arr.length;
    }

randomArr(sixnumArr);
console.log(sixnumArr);
console.log(averagenumArr(sixnumArr));


//z 11
let arr = [[1, 2, 3], [4, 5, 6]];
let newArr = [];

for (let t = 0; t < arr.length; t++) {
    for (let l = 0; l < arr[t].length; l++) {
        newArr.push(arr[t][l]);
    }
}
console.log(newArr);

//z 12 
const fiveArr = new Array(5);

randomArr(fiveArr);

console.log(fiveArr);

for (let i = 0, sum = 0; i < fiveArr.length; i++) {
    if (i === (fiveArr.length - 1)) {
        console.log(`Последний элемент массива - ${fiveArr[i]}`);
    } else {
        sum = fiveArr[i] + fiveArr[i + 1];
        console.log(sum);
    }
}
Footer