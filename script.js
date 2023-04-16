let result = document.getElementById('result');

function insert(char) {
  result.value += char;
}

function clearResult() {
  result.value = '';
}

function backspace() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  let expression = result.value;

  if (expression) {
    try {
      result.value = eval(expression);
    } catch (error) {
      result.value = 'Error';
    }
  }
}