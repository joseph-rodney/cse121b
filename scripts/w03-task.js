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
// Declare and instantiate an array variable to hold the numbers 1 through 13.
var numbersArray = Array.from({ length: 13 }, (_, i) => i + 1);
// Assign the value of the array variable to the HTML element with an ID of array.
document.getElementById('array').textContent = numbersArray.join(', ');
/* Output Odds Only Array */
var oddNumbers = numbersArray.filter(num => num % 2 !== 0);
/* Output Evens Only Array */
var evenNumbers = numbersArray.filter(num => num % 2 === 0);
/* Output Sum of Org. Array */
var sumOfArray = numbersArray.reduce((acc, num) => acc + num, 0);
// Assign the result to the HTML element with an ID of sumOfArray.
document.getElementById('sumOfArray').textContent = sumOfArray;
/* Output Multiplied by 2 Array */
var multipliedArray = numbersArray.map(num => num * 2);
document.getElementById('multiplied').textContent = multipliedArray.join(', ');
/* Output Sum of Multiplied by 2 Array */
// Use the reduce() array method to sum the array elements after multiplying each element by two.
var sumOfMultiplied = multipliedArray.reduce((acc, num) => acc + num, 0);
// Assign the result to the HTML element with an ID of sumOfMultiplied.
document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied;

/* Event Listeners */
document.getElementById('addNumbers').addEventListener('click', function () {
    var addNumber1 = Number(document.querySelector('#add1').value);
    var addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
});

document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);
document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);
document.getElementById('divideNumbers').addEventListener('click', divideNumbers);
