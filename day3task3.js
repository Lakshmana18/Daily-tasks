function checkPalindrome() {
    const input = document.getElementById('textInput').value.trim();
    const resultElement = document.getElementById('answer');
    const normalizedInput = input.toLowerCase().replace(/[^a-z0-9]/gi, '');
    const isPalindrome = normalizedInput === normalizedInput.split('').reverse().join('');
    if (input === '') {
        resultElement.textContent = 'Please enter some text.';

    } else {
        resultElement.textContent = isPalindrome ? `"${input}" is a palindrome.` : `"${input}" is not a palindrome.`;
    }
}