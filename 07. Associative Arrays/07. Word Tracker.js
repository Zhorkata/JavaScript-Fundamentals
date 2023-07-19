function wordTracker(input) {

    const myWords = input.shift().split(' ');
    const wordOccurrences = {};

    for (const word of myWords) {
        wordOccurrences[word] = 0;
    }
    for (const word of input) {
        if (wordOccurrences.hasOwnProperty(word)) {
            wordOccurrences[word]++;
        }
    }

    const sortedDescending = Object.entries(wordOccurrences).sort((a, b) => b[1] - a[1]);

    for (const kvp of sortedDescending) {
        console.log(`${kvp[0]} - ${kvp[1]}`);
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
