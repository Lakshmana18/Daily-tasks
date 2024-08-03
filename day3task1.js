function checkOddEven() {
    const number = parseInt(document.getElementById('numberInput').value);
    const result = document.getElementById('result');
    
    if (isNaN(number)) {
        result.textContent = 'Please enter a valid number';
        return;
    }
    
    if (number % 2 === 0) {
        result.textContent = `${number} is Even`;
    } else {
        result.textContent = `${number} is Odd`;
    }
}