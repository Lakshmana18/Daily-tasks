function calculateFactorial() {
    const input = document.getElementById('numberInput').value;
    const resultElement = document.getElementById('value');
    
    // Validate input
    if (input === '' || isNaN(input) || input < 0) {
        resultElement.textContent = 'Please enter a non-negative integer.';
        return;
    }

    const number = parseInt(input, 10);
    let factorial = 1;

    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }

    resultElement.textContent = `Factorial of ${number} is ${factorial}.`;
}