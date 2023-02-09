let x = Number(prompt('Введите число от 1 до 12'));
function month(x) {
    if (x < 3) {
        return 'зима';
    } else if (x > 3 && x <= 8) {    
     return 'лето';    
    } else if (x > 8 && x <= 11) {
        return 'осень!';
    } else {
        console.log('Вы ввели некорректное число');
    }
}
console.log(month(x));