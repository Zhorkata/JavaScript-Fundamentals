function wordOccurences(input) {
    let object = {};
    let map = new Map();

    for (const word of input) {
        object[word] = object[word] ? object[word] + 1 : 1;
    }

    let sortedDescending = Array.from(map).sort((a,b)=> b[1] - a[1]);
    
    for (const key in object) {
       console.log(`${key} -> ${object[key]} times`);
    }

}
wordOccurences([
    "Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence", "And",
    "finally", "the", "third", "sentence"
])
