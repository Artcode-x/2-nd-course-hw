function whichSeason() {
    
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

}


function rememberWords() {
    
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

}