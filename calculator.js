//uncaught syntax error - answer has already been declared
const operatorSet = new Set(['+', '-', 'x', '/', '=']);
let expressionArray = [];
let numString = '';
let answer = 0;
const buttons = document.querySelectorAll('button');
const outPutBox = document.getElementById('output-box');

buttons.forEach(function (button) {
  button.addEventListener('click', storeNum);
});

/*taskListItem.addEventListener("contextmenu", (e) => { 
  e.preventDefault();*/

function storeNum(event) {
  //event.preventDefault();
  let n = event.target.value;
  if (n === 'C') {
    n = '';
    clearOutputBox();
  }

  if (!operatorSet.has(n)) {
    numString = numString + n;
    console.log('number: ', numString);
    console.log(expressionArray);
    //expressionArray.push(numString);
  }

  if (operatorSet.has(n)) {
    expressionArray.push(numString);
    expressionArray.push(n);
    console.log('operator: ', n);
    numString = '';
    console.log('expressionArray: ', expressionArray);
  }
  outPutBox.value = numString;
  if (typeof expressionArray[2] !== 'undefined') {
    // console.log('expressionArray.length: ', expressionArray.length);
    lastExpression();

    //console.log('expressionArray post slice: ', expressionArray);
  } else if (n == '=') {
    //  console.log('expressionArray: ', expressionArray);
    lastExpression();
  }
}

function lastExpression() {
  if (expressionArray[1] === '=') {
    expressionArray.splice(1, 2);
    console.log('expressionArray in if statement: ', expressionArray);
    return expressionArray;
  }
  num1 = parseFloat(expressionArray[0]);
  operator = expressionArray[1];
  num2 = parseFloat(expressionArray[2]);
  answer = calculate(num1, operator, num2);
  outPutBox.value = answer;
  expressionArray.splice(0, 3);
  console.log('expressionArray post reset: ', expressionArray);
  expressionArray.unshift(answer);
  console.log('expressionArray post push: ', expressionArray);
  outPutBox.value = answer;

  //answer = num1;
  //console.log('expressionArray post slice: ', expressionArray);
  console.log('ima workin');
}

function calculate(num1, operator, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
      break;

    case '-':
      return num1 - num2;
      break;

    case 'x':
      return num1 * num2;
      break;

    case '/':
      return num1 / num2;
    //replace(answer, i);
  }
  console.log(answer);
  // replace(answer, i);
  console.log('array is ' + expressionArray);
}

function replace(answer, i) {
  console.log('i comes in as ' + i);
  expressionArray.splice(i, 2);
  console.log('i-1 is ' + i - 1);
  expressionArray[i - 1] = answerCalc;
}

function clearOutputBox() {
  document.getElementById('output-box').value = '';
  expressionArray = [];
  numString = '';
}
