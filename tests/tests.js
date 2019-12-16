describe("Calculator tests(Lecture 3)", function () {
    describe('Plus', () => {
        const testData = [
            {
                a: -2,
                b: 3,
                expected: 1,
            },
            {
                a: 2,
                b: -5,
                expected: -3,
            },
            {
                a: 0,
                b: 0,
                expected: 0,
            },
            {
                a: 0,
                b: 3,
                expected: 3,
            },
            {
                a: -1,
                b: 0,
                expected: -1,
            },

        ];

        testData.forEach(data => {
            const {a, b, expected} = data;

            const actual = plus(a, b);

            it(`Вводим:  ${a} + ${b} Должно вернуть:  ${expected}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('Minus', () => {
        const testData = [
            {
                a: 5,
                b: 3,
                expected: 2,
            },
            {
                a: 0,
                b: -5,
                expected: 5,
            },
            {
                a: 0,
                b: 0,
                expected: 0,
            },
            {
                a: 0,
                b: 3,
                expected: -3,
            },
            {
                a: -1,
                b: 0,
                expected: -1,
            },

        ];

        testData.forEach(data => {
            const {a, b, expected} = data;

            const actual = minus(a, b);

            it(`Вводим:  ${a} - ${b} Должно вернуть:  ${expected}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('Divided', () => {
        const testData = [
            {
                a: 5,
                b: 2,
                expected: 2.5,
            },
            {
                a: 5,
                b: 0,
                expected: "Неверное число!",
            },
            {
                a: 3,
                b: 1,
                expected: 3,
            },
            {
                a: -2,
                b: 5,
                expected: -0.4,
            },

        ];

        testData.forEach(data => {
            const {a, b, expected} = data;

            const actual = divided(a, b);

            it(`Вводим:  ${a} / ${b} Должно вернуть:  ${expected}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('multiple', () => {
        const testData = [
            {
                a: 5,
                b: 2,
                expected: 10,
            },
            {
                a: 0,
                b: -5,
                expected: 0,
            },
            {
                a: 0,
                b: 0,
                expected: 0,
            },
            {
                a: 3,
                b: 1,
                expected: 3,
            },
            {
                a: -2,
                b: 5,
                expected: -10,
            },

        ];

        testData.forEach(data => {
            const {a, b, expected} = data;

            const actual = multiple(a, b);

            it(`Вводим:  ${a} * ${b} Должно вернуть:  ${expected}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

});

describe("Equal", function () {
    let actual;
    let expected;

    it("Проверка на приоритетность умножения", function () {
        const numbers = [2, 5, 6, 1];
        const sings = ["+", "-", "*"];
        actual = equal(numbers, sings);

        expected = 1;
        assert.deepEqual(actual, expected);
    });

    it("Проверка на приоритетность деления", function () {
        const numbers = [2, 3, 6];
        const sings = ["+", "÷"];


        actual = equal(numbers, sings);

        expected = 2.5;
        assert.deepEqual(actual, expected);
    });

    it("Проверка выражения с минусом и плюсом", function () {
        const numbers = [2, 3, 6];
        const sings = ["+", "-"];

        actual = equal(numbers, sings);

        expected = -1;
        assert.deepEqual(actual, expected);
    });

    it("Проверка выражений с нулями", function () {
        const numbers = [2, 0, 0];
        const sings = ["+", "-"];

        actual = equal(numbers, sings);

        expected = 2;
        assert.deepEqual(actual, expected);
    });

    it("Проверка суммы отрицательных чисел", function () {
        const numbers = [-2, -5];
        const sings = ['+'];

        actual = equal(numbers, sings);

        expected = -7;
        assert.deepEqual(actual, expected);
    });

    it("Проверка дробных чисел", function () {
        const numbers = [2.5, 2.3];

        const sings = ['+'];


        expected = 4.8;
        assert.deepEqual(actual, expected)
    });

    it("Проверка дробных отрицательных чисел", function () {
        const numbers = [-2.5, -2.3];
        const sings = ['+'];

        actual = equal(numbers, sings);

        expected = -4.8;
        assert.deepEqual(actual, expected)
    });

});

describe("Clear", function () {

    it("Проверка на отчистку окна", function () {
        const string = "1234";

        let actual = clear(string);

        let expected = "";
        assert.strictEqual(actual, expected);
    });

});

describe("Percent", function () {

    it("Проверка на подсчет процента", function () {
        const a = 8;
        const b = 2;

        let actual = percent(8, 2);

        let expected = 0.16;
        assert.strictEqual(actual, expected);
    });
});

describe("Ln", function () {

    it("Проверка на получение логорифма числа", function () {
        const number = [5];
        const sings = ["ln"];

        let actual = equal(number, sings);

        let expected = 1.6094379124341003;
        assert.deepEqual(actual, expected);
    });
});

describe("Factorial", function () {

    it("Проверка факториала на число", function () {
        const number = 5;

        let actual = factorial(number);

        let expected = 120;
        assert.strictEqual(actual, expected);
    });

    it("Проверка факториала на отрицательное число", function () {
        const number = -5;

        let actual = factorial(number);

        let expected = "Неверное число";
        assert.strictEqual(actual, expected);
    });

    it("Проверка факториала c числа 0", function () {
        const number = 0;

        let actual = factorial(number);

        let expected = 1;
        assert.strictEqual(actual, expected);
    });
});

describe("Log", function () {

    it("Проверка функции вычисления логарифма", function () {
        const number = [5];
        const sings = ["log"];

        let actual = equal(number, sings);

        let expected = 0.6989700043360189;
        assert.deepEqual(actual, expected);
    });
});

describe("Sin", function () {

    it("Проверка функции вычисления синуса", function () {
        const number = [5];
        const sings = ["sin"];

        let actual = equal(number, sings);

        let expected = -0.9589242746631385;
        assert.deepEqual(actual, expected);
    });
});

describe("Cos", function () {

    it("Проверка функции вычисления коссинуса", function () {
        const number = [5];
        const sings = ["cos"];

        let actual = equal(number, sings);

        let expected = 0.28366218546322625;
        assert.deepEqual(actual, expected);
    });
});

describe("Tan", function () {

    it("Проверка функции вычисления тангенса", function () {
        const number = [5];
        const sings = ["tan"];

        let actual = equal(number, sings);

        let expected = -3.380515006246586;
        assert.deepEqual(actual, expected);
    });
});

describe("xY", function () {

    it("Проверка функции вычисления степени", function () {
        const number = [5, 3];
        const sings = ["xy"];

        let actual = equal(number, sings);

        let expected = 125;
        assert.deepEqual(actual, expected);
    });
});

describe("sqrt", function () {

    it("Проверка функции нахождения корня квадратного", function () {
        const number = [5];
        const sings = ["sqrt"];

        let actual = equal(number, sings);

        let expected = 2.23606797749979;
        assert.deepEqual(actual, expected);

    });
});


