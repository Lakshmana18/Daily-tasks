function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            count++;
        }
    }
    console.log("'"+str+"'"+" contains "+count+" vowels");

    return count;
}

countVowels("lakshman");
