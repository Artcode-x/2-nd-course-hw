let x = Number(prompt('Введите число от 1 до 12'));
function month(x) {
    if (x <= 2) {
        return 'зима';
    } else if (x > 2 && x < 6) {
        return 'весна';
    } else if (x > 5 && x <= 8) {    
     return 'лето';    
    } else if (x > 8 && x <= 10) {
        return 'осень!';

    } else {
        return 'Зимушка';
    }
}
console.log(month(x));
