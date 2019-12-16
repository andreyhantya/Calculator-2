let calculator = document.getElementById("calc");
let buttons = document.querySelectorAll(".element");
let out = document.getElementById('out');
let numbers = [];           //массив для чисел с экрана
let sings = [];             //массив для знаков операций
let countOfSings = 0,       //счетчик знаков операций
    countOfNumbers = 0,     //счетчик чисел с экрана
    sum = 0;                //Сумма


for (let i = 0; i < buttons.length; i++) {
    let numbs = buttons[i];
    numbs.addEventListener('click', function (e) {
        if (e.target.className === "element element--number") {
            out.innerText += e.target.innerHTML;
        } else {
            operationsFunc(e.target.id);
        }
    });
}

//-----------Функция с условием после клика--------------------
/*Условия по клику, если клик на айди то вызывает функцию*/
const operationsFunc = (target) => {
    switch (target) {
        case "plus":
            sings[countOfSings] = "+";
            clickButton();
            break;
        case "minus":
            sings[countOfSings] = "-";
            clickButton();
            break;
        case "multiple":
            sings[countOfSings] = "*";
            clickButton();
            break;
        case "divided":
            sings[countOfSings] = "÷";
            clickButton();
            break;
        case "equal":
            if (sings.length === 0) {
                alert("Добавьте знак!");
            } else {
                numbers[countOfNumbers] = Number(out.innerHTML);
                out.innerText = equal(numbers, sings);
            }
            break;
        case "clear":
            out.innerText = clear();
            break;
        case "percent":
            sings[countOfSings] = "%";
            clickButton();
            break;
        case "ln":
            sings[countOfSings] = "ln";
            clickButton();
            break;
        case "cos":
            sings[countOfSings] = "cos";
            clickButton();
            break;
        case "sin":
            sings[countOfSings] = "sin";
            clickButton();
            break;
        case "tan":
            sings[countOfSings] = "tan";
            clickButton();
            break;
        case "fact":
            sings[countOfSings] = "!x";
            clickButton();
            break;
        case "log":
            sings[countOfSings] = "log";
            clickButton();
            break;
        case "xy":
            sings[countOfSings] = "xy";
            clickButton();
            break;
        case "sqrt":
            sings[countOfSings] = "sqrt";
            clickButton();
            break;
    }
};
//-----------------------------------------------------
//После нажатия на мат.символы (кидает число в массив добавляет счетчики и удаляет содержимое в окне)
const clickButton = () => {
    numbers[countOfNumbers] = Number(out.innerHTML);
    countOfNumbers++;
    countOfSings++;
    out.innerText = clear();
};
//--------------Функция отчистки дисплея калькулятора---------------
const clear = () => {
    return "";
};

//------------Функция суммы------------
const plus = (a, b) => {
    return a + b;
};

//------------Функция вычитания------------
const minus = (a, b) => {
    return a - b;
};

//------------Функция умножения------------
const multiple = (a, b) => {
    return a * b;
};

//------------Функция деления------------
const divided = (a, b) => {
    if (a === 0 || b === 0) {
        return "Неверное число!";
    } else {
        return a / b;
    }
};

//------------Функция вычисления процента------------
const percent = (a, b) => {
    return a * b / 100;
};

//------------Функция вычисления факториала------------
const factorial = (n) => {
    let sum = 1;
    if (n < 0) {
        return "Неверное число";
    } else {
        for (let i = 1; i <= n; i++) {
            sum *= i;
        }
        return sum;
    }
};


//------------Функция равно------------
/*Принимает два аргумента, массив чисел и массив символов, после,
* через свитч проверяет знак в массиве знаков и запускает нужную функцию аргументами которой
* будут числа из массива чисел, затем удаляет пересчитанные елементы и вместо них ставит сумму
* по завершению возвращает сумму подсчета*/
//-------------------------------------
const equal = (number, sings) => {
    // Условие на умножить и поделить
    for (let i = 0; i < sings.length; i++) {
        if (sings[i] === "*") {
            sum = multiple(number[i], number[i + 1]);
            number.splice(i, i + 1, sum);
        } else if (sings[i] === "÷") {
            sum = divided(number[i], number[i + 1]);
            number.splice(i, i + 1, sum)
        }
    }
    // Подсчет + -
    for (let i = 0; i < sings.length; i++) {
        switch (sings[i]) {
            case "+":
                sum = plus(number[0], number[1]);
                number.splice(0, 2, sum);
                break;
            case "-":
                sum = minus(number[0], number[1]);
                number.splice(0, 2, sum);
                break;
            case "%":
                sum = percent(number[0], number[1]);
                number.splice(0, 2, sum);
                break;
            case "ln":
                sum = Math.log(number[0]);
                number.splice(0, 1, sum);
                break;
            case "cos":
                sum = Math.cos(number[0]);
                number.splice(0, 1, sum);
                break;
            case "sin":
                sum = Math.sin(number[0]);
                number.splice(0, 1, sum);
                break;
            case "tan":
                sum = Math.tan(number[0]);
                number.splice(0, 1, sum);
                break;
            case "!x":
                sum = factorial(number[0]);
                number.splice(0, 1, sum);
                break;
            case "log":
                sum = Math.log10(number[0]);
                number.splice(0, 1, sum);
                break;
            case "xy":
                sum = Math.pow(number[0], number[1]);
                number.splice(0, 2, sum);
                break;
            case "sqrt":
                sum = Math.sqrt(number[0]);
                number.splice(0, 1, sum);
                break;
        }
    }
    number = [];
    sings = [];
    countOfSings = 0;
    countOfNumbers = 0;
    return sum;
};
