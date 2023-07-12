function wordTracker(input) {

    let myWords = input[0].split(' ');
    let wordOccurrences = {};

    for (let i = 1; i < input.length; i++) {

        let words = input[i].split(' ');

        for (let word of words) {
            if (myWords.includes(word)) {
                wordOccurrences[word] = wordOccurrences[word] ? wordOccurrences[word] + 1 : 1;
            }
        }
    }

    let sortedDescending = Object.entries(wordOccurrences).sort((a, b) => b[1] - a[1]);

    for (let [word, count] of sortedDescending) {
        console.log(`${word} - ${count}`);
    }
}
wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
])
console.log(`-----------CASE 2 ---------`);
wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence'
])
