function solve(text, chartToChange, targetText) {
    let newString = '';
    for (let i = 0; i < text.length; i++) {
        if(text[i] === '_'){
            newString = newString + chartToChange;
        }else{
            newString += text[i];
        }
    }
    console.log(newString === targetText ? 'Matched' : 'Not Matched');
}
solve('Str_ng', 'I', 'Strong')