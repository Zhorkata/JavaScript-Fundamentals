function revealWords(word, text) {
    let wordSplit = word.split(', ').join('')

    while (text.includes('*')) {
        for (let i = 0; i < word.length; i++) {
            text = text.replace('*', wordSplit[i]);
        }
    }
    console.log(text);
}
revealWords(
    'great',
    'softuni is ***** place for learning new programming languages'
)
console.log(`---CASE 2 ---`);
revealWords(
    'great, learning',
    'softuni is ***** place for ******** new programming languages'
)
