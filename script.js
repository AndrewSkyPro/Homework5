//Задание 1

const lesserNumbers = (a, b) => {
    if (a < b) {
        return a;
    } else {
        false;
    }
}

console.log(lesserNumbers(4, 8));

const lesserNumbers2 = (a, b) => {
    if (a = b) {
        return a, b;
    } else {
        false;
    }
}

console.log(lesserNumbers2(6, 6));

//задание 2

const modulesFromNumbers = (n) => {
    if (n % 2 == 0) {
        return('Число четное');
    } else {
        return('Число нечетное');
    }
}

console.log(modulesFromNumbers(3));
console.log(modulesFromNumbers(4));

//задание 3.1

const squareNumber = (c) => c**2;
console.log(squareNumber(8));

//Задание 3.2

//?

//Задание 4

function enterYourAge() {
    let userAge = Number(prompt('Сколько вам лет?'));
    if (userAge < 0) {
        alert('Вы ввели неправильное значение');
    } else if (userAge >= 0 && userAge < 12) {
        alert('Привет, друг!');
    } else if (userAge >= 13) {
        alert('Добро пожаловать!');
    }
}

enterYourAge();

//Задание 5

const numbers = (c, d) => c * d;

numbers(8, 5);

//Задание 6

function whatNumber() {
    let userAnswer = prompt('Введите число');
    let result = userAnswer ** 3;
    
    if (userAnswer >= 0 && userAnswer < 10) {
        return(`${userAnswer} в кубе равняется ${result}`);
    } else {
        return('Переданный параметр не является числом');
    }
}

whatNumber();





