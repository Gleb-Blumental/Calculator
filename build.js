const num1Input = document.querySelector('#num1');
const num2Input = document.querySelector('#num2');
const operatorSelect = document.querySelector('#operator');
const calculateButton = document.querySelector('#calculate');
const resultParagraph = document.querySelector('#result');
const saveButton = document.querySelector('#save');
const clearButton = document.querySelector('#clear');

calculateButton.addEventListener('click', ()=> {

const num1 = Number(num1Input.value);
const num2 = Number(num2Input.value);
const operator = operatorSelect.value;

let result = 0;



if(operator === '+'){
    result = num1 + num2;
} else if (operator === '-'){
    result = num1 - num2;
} else if (operator === '*'){
    result = num1 * num2;
} else if (operator === '/'){
    result = num1 / num2;
}

resultParagraph.textContent = result;
});

clearButton.addEventListener('click', ()=> {
    num1.textContent = '';
    num2.textContent = '';
    resultParagraph.textContent = '';
})