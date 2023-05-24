function charInRange(firstChar, secondChar) {
    let startChar = Math.min(firstChar.charCodeAt(0), secondChar.charCodeAt(0));//97
    let endChar = Math.max(firstChar.charCodeAt(0), secondChar.charCodeAt(0));//100
    let result = [];
    for (let current = startChar + 1; current < endChar; current++) {
        result.push(String.fromCharCode(current));
    }
    console.log(result.join(' '));
    return result.join(' ');
}
charInRange('a', 'd');
charInRange('#', ':');
charInRange('C', '#');

