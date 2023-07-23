function chars(input) {
  
    let output = '';
  
    for (let i = 0; i < input.length; i++) {
        if(input[i] !== input[i-1]){
            output += input[i];
        }
    }
    console.log(output);
}
chars('aaaaabbbbbcdddeeeedssaa')
console.log('----CASE 2----');
chars('qqqwerqwecccwd')
