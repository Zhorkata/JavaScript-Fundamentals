function oddOccurrences(input){
    let words = input.split(' ');
    let oddAppears = false;
    for (let i = 0; i < input.length; i++) {
        if(words.includes(words[i])){
            words[i] = words[i] ? words[i] : false ;
        }
        
        
    }
    if(oddAppears){
        console.log(words[i]);
    }
    // console.log(words[0]);
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
// if (myWords.includes(word)) {
//     wordOccurrences[word] = wordOccurrences[word] ? wordOccurrences[word] + 1 : 1;
// }
