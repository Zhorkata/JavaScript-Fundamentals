function oddOccurrences(input){
    let words = input.split(' ');
    let oddAppears = false;
    let appearrenceCount = 0;

    for (let i = 0; i < input.length; i++) {
        if(words.includes(words[i])){
            appearrenceCount++;

            if(appearrenceCount % 2 !== 0){
                oddAppears = true;
                console.log(words[i]);
            }
        }
    }
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
