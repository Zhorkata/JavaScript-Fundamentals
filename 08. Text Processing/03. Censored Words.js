function censoredWords(text, word) {
    let newWord = '';

    for (let i = 0; i < word.length; i++) {
        newWord += '*';
    }

    while (text.includes(word)) {
        text = text.replace(word, newWord);
    }
    console.log(text);
}
censoredWords(
    'A small sentence with some words',
    'small'
)
console.log(`--CASE 2--`);
censoredWords('Find the hidden word', 'hidden')
