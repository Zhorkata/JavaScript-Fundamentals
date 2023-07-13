function oddOccurrences(input) {
    let words = input.split(' ');
    let appearrenceCount = {};

    for (let i = 0; i < words.length; i++) {
        let word = words[i].toLowerCase();

        if (appearrenceCount[word]) {
            appearrenceCount[word]++;
        } else {
            appearrenceCount[word] = 1;
        }
    }
    let oddOccurrences = [];
    for(let word in appearrenceCount){
        if(appearrenceCount.hasOwnProperty(word) && appearrenceCount[word] % 2 !== 0){
            oddOccurrences.push(word);
        }
    }
    return oddOccurrences.join(' ');
}
let result = oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
console.log(result);
