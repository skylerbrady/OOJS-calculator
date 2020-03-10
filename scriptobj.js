var decimal = document.getElementById("decimal");
var clear = document.getElementById("clear");
var displayValElement = document.getElementById("display__numbers");
var btnNumbers = document.getElementsByClassName("btn--number");
var btnOperators = document.getElementsByClassName("btn--operator");

var arrayval = [];
var stringNum = '';
var operatorLen = 0;

updateDisplayVal = (e) => {
    var btnText = e.target.innerText;
    stringNum += btnText;
    displayValElement.innerText = arrayval.join('') + stringNum;
}

performOperation = (e) => {
    var operator = e.target.innerText;
    console.log(stringNum);
    if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {
        operatorLen++;
        arrayval.push(stringNum);
        if (operatorLen >= 2) {
            let evaluation = eval(arrayval.join(''));
            arrayval = [];
            arrayval.push(evaluation);
            arrayval.push(operator);
            operatorLen = 1;
            displayValElement.innerText = evaluation + operator
        } else {
            arrayval.push(operator);
            displayValElement.innerText = arrayval.join('');
        }

    } else if (operator === '=') {
        if (stringNum) {
            arrayval.push(stringNum);
        }
        let evaluation = eval(arrayval.join(''));
        arrayval = [];
        arrayval.push(evaluation);
        displayValElement.innerText = evaluation
    }
    stringNum = '';
}


for (let i = 0; i < btnNumbers.length; i++) {
    btnNumbers[i].addEventListener('click', updateDisplayVal)
}

for (let i = 0; i < btnOperators.length; i++) {
    btnOperators[i].addEventListener('click', performOperation);
}

clear.onclick = () => {
    arrayval = [];
    stringNum = '';
    displayValElement.innerHTML = '0';
    decimal.disabled = false;
}

decimal.onclick = () => {
    decimalVal = 0;
    stringNum += '.';
    if (stringNum === '.') {
        decimalVal++;
    }
    if (decimalVal >= 1) {
        stringNum === ''
    } else {
        displayValElement.innerText = arrayval.join('') + stringNum;
    }

}