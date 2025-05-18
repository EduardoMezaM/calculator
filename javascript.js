const displayOutput = document.querySelector('.output');
const operatorBtns = document.querySelectorAll('.operatorBtn');
const digitBtns = document.querySelectorAll('.digitBtn');
const clearBtn = document.querySelector('.clearBtn');
const posNegBtn = document.querySelector('.posNegBtn');
const equalsBtn = document.querySelector('.equalsBtn');

let prevNum = '';
let currNum = '';
let operator = '';
let result = '';

function storeNum(){
    const digit = this.innerText;
    if(digit === '.' && currNum.includes('.')) return;
    else if(digit === '.' && currNum === ''){
        currNum = '0'
    };
    
    currNum += digit;
    displayOutput.innerText = currNum;

};

function storeOperator(){
    if(currNum === '') return;

    prevNum = currNum;
    operator = this.innerText;
    currNum = '';
    displayOutput.innerText = this.innerText;
};

function clear(){
    currNum = '';
    prevNum = '';
    operator = '';
    result = '';
    displayOutput.innerText = '0';
};

function toggleSign(){
    if(!currNum) return; 

    if(currNum.startsWith('-')){
        currNum = currNum.slice(1); 
    }
    else{
        currNum = '-' + currNum;
    }

    displayOutput.innerText = currNum;
};

function calculate(){
   if(prevNum !== '' && currNum !== '' && operator !== ''){
        const a = Number(prevNum);
        const b = Number(currNum); 

        if(operator === '/'){
            result = (a / b).toFixed(3);
        }
        else if(operator === 'x'){
            result = (a * b).toFixed(3);
        }
        else if(operator === '-'){
            result = (a - b).toFixed(3);
        }
        else if(operator === '+'){
            result = (a + b).toFixed(3);
        }

        displayOutput.innerText = result;
        currNum = result;
        operator = '';
        prevNum = '';
   }
   else return;
};

digitBtns.forEach(digitBtn => {
    digitBtn.addEventListener('click', storeNum);
});

operatorBtns.forEach(operatorBtn => {
    operatorBtn.addEventListener('click', storeOperator)
});

clearBtn.addEventListener('click', clear);

posNegBtn.addEventListener('click', toggleSign)

equalsBtn.addEventListener('click', calculate);