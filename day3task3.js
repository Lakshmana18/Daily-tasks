function checkPalindrome() {
    const input = document.getElementById('textInput').value.trim();
    const resultElement = document.getElementById('result');

    // Normalize the input by removing non-alphanumeric characters and converting to lowercase
    const normalizedInput = input.toLowerCase().replace(/[^a-z0-9]/gi, '');

    // Check if the normalized input is a palindrome
    const isPalindrome = normalizedInput === normalizedInput.split('').reverse().join('');

    // Display the result
    if (input === '') {
        resultElement.textContent = 'Please enter some text.';
    } else {
        resultElement.textContent = isPalindrome ? `"${input}" is a palindrome.` : `"${input}" is not a palindrome.`;
    }
}