let result = document.getElementById('result');

function insert(char) {
  result.innerText += char;
  console.log(result.innerText)
}

function clearResult() {
  result.innerText = '';
}

function backspace() {
  result.innerText = result.innerText.slice(0, -1);
}

function calculate() {
    let expression = result.innerText;
  
    if (expression) {
      try {
        result.innerText = eval(expression);
      } catch (error) {
        result.innerText = 'Error';
      }
    }
  }
