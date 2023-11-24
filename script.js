var firstNumber = '';
var secondNumber = '';
var operator = '';
var res = '';

function addToVariable(value) {
    
    if (operator === '' && secondNumber === '') {
        firstNumber += value;
        console.log("first number = " + firstNumber)
        updateVariableValue(firstNumber);
    } else {
        secondNumber += value;
        console.log("second number = " + secondNumber)
        updateVariableValue(secondNumber);
    }


}

function addToOperator(value) {
    if (secondNumber === ''){
    operator = value;
    updateOperatorValue(operator);
    console.log("first number = " + firstNumber)
    console.log(operator)
    }
    else {
        console.log("test2" + operator)
        operate(operator, firstNumber, secondNumber)
        operator = value;
        console.log("first number = " + firstNumber)
    }
}

function resetVariable() {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    updateVariableValue('');
    updateOperatorValue('');
}

function updateVariableValue(value) {
    console.log(value)
    document.getElementById('screen').innerText = value;
}

function updateOperatorValue(value) {
    console.log(value)
    document.getElementById('screen').innerText = value;
}

function addition(a, b) {
    
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(op, a, b) {
    firstNumber = Number(a);
    secondNumber = Number(b);
    operator = op;
    var result;

    switch (operator) {
        case '+':
            var result = addition(firstNumber, secondNumber) 
            firstNumber = result;
            secondNumber = '';
            document.getElementById('screen').innerText = result;
            console.log("Ergebnis " + result)
            return result;
        case '-':
            var result = substract(firstNumber, secondNumber) 
            firstNumber = result;
            secondNumber = '';
            document.getElementById('screen').innerText = result;
            console.log("Ergebnis " + result)
            return result;
        case '*':
            var result = multiply(firstNumber, secondNumber) 
            firstNumber = result;
            secondNumber = '';
            document.getElementById('screen').innerText = result;
            console.log("Ergebnis " + result)
            return result;
        case '/':
            if(secondNumber !== 0){
            var result = divide(firstNumber, secondNumber) 
            firstNumber = result;
            secondNumber = '';
            document.getElementById('screen').innerText = result;
            console.log("Ergebnis " + result)
            return result;}
            else {
                document.getElementById('screen').innerText = "Error";
                alert("You cant divide by 0")
            }
    }
    console.log("ende")
}