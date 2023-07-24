function splitter(string) {

    let lowerCased = string.toLowerCase();
    let output = '';
    for (let i = 0; i < string.length; i++) {
        if (lowerCased[i] === string[i]) {
            output = output + string[i]
        } else {
            output = output + ' ' + string[i] 
        }
    }
    console.log(output.trimStart());
}
splitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
