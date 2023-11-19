/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
}

/* Function Expression - Subtract Numbers */
var subtract = function (number1, number2){
    return number1 - number2;
};

/* Arrow Function - Multiply Numbers */
var multiply = (number1, number2) => number1 * number2;

/* Open Function Use - Divide Numbers */
function divide(number1, number2){
    return number1 / number2;
}

/* Decision Structure */
/* Subtraction Feature */
function subtractNumbers() {
    var subtractNumber1 = Number(document.querySelector('#subtract1').value);
    var subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

/* Step 4 - Arrow Functions */
/* Multiplication Feature */
var multiplyNumbers = () => {
    var factor1 = Number(document.querySelector('#factor1').value);
    var factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
};

/* Step 5 - Function Declaration */
/* Division Feature */
function divideNumbers() {
    var dividend = Number(document.querySelector('#dividend').value);
    var divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
}

/* Step 6 - Selection Structures */
document.getElementById('getTotal').addEventListener('click', function () {
    var subtotal = Number(document.getElementById('subtotal').value);
    var discount = document.getElementById('member').checked ? 0.15 : 0;
    var total = subtotal - subtotal * discount;
    document.getElementById('total').textContent = `$ ${total.toFixed(2)}`;
});


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
