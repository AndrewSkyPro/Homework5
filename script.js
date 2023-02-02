//Задание 1

const lesserNumbers = (a, b) => {
    if (a < b) {
        return a;
    } else {
        false;
    }
}

console.log(lesserNumbers(4, 8));

const lesserNumberss = (a, b) => {
    if (a > b) {
        return a;
    }
    return b;
}

console.log(lesserNumberss(8,1));
console.log(lesserNumberss(2,7));
console.log(lesserNumberss(10,10));

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

//задание 3

function squareNumber1 (c) {
    console.log(c**2);
}

squareNumber1(8);

const eightSquared = (c) => c**2;

console.log(eightSquared(8));


//Задание 4

function enterYourAge() {
    let userAge = Number(prompt('Сколько вам лет?'));
    if (isNan(userAge) || userAge < 0) {
        alert('Вы ввели неправильное значение');
    } else if (userAge >= 0 && userAge < 12) {
        alert('Привет, друг!');
    } else if (userAge >= 13) {
        alert('Добро пожаловать!');
    }
}

enterYourAge();

//Задание 5

const d = Number(prompt('Введите первое число'));
const f = Number(prompt('Введите второе число'));

function twoNumbers(d, f) {
    if (!isNaN(d) && !isNaN(f)) {
        return alert(d * f);
    } else {
        alert('Одно или оба значения не являются числом');
    }
}

twoNumbers(d, f);


//Задание 6

const whatNumberTest = (a) => {
    if (isNaN(a) || a === null)
        return('Переданный параметр не является числом');
        return(`${a} в кубе равняется ${a ** 3}`);
}

for (let i = 0; i <= 10; i++) {
    console.log(whatNumberTest(i));
}






