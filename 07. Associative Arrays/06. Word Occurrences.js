function wordOccurrences(input) {
    let object = {};

    for (const word of input) {
        object[word] = object[word] ? object[word] + 1 : 1;
    }

    let sortedDescending = Object.entries(object).sort((a, b) => b[1] - a[1]);

    for (const [key, value] of sortedDescending) {
        console.log(`${key} -> ${value} times`);
    }
}
wordOccurrences([
    "Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence", "And",
    "finally", "the", "third", "sentence"
]);
console.log(`-----------CASE 2---------`);
wordOccurrences([
    "dog", "bye", "city", "dog", "dad",
    "boys", "ginger"
])
