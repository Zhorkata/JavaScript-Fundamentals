function repeatString(text, countRepeat) {
    let string = '';

    for (let i = 0; i < countRepeat; i++) {
        string += text;
    }
    // console.log(string);
    return string;
}

repeatString("abc", 3)
console.log('-----');
repeatString("String", 2)