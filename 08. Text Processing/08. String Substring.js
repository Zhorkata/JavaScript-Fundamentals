function stringSubstring(word, text) {
    let words = text.toLowerCase().split(' ');
    for (const curWord of words) {
        if (words.includes(word)) {
            console.log(word);
            break;
        } else {
            console.log(`${word} not found!`);
            break;
        }
    }
}
stringSubstring(
    'javascript',
    'JavaScript is the best programming language'
)
console.log(`----CASE 2----`);
stringSubstring(
    'python',
    'JavaScript is the best programming language'
)
