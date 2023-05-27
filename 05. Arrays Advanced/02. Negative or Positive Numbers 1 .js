function negativeOrPositiveNumbers(numbers) {
    let newArr = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            newArr.unshift(numbers[i])
        } else {
            newArr.push(numbers[i])
        }
    }
    console.log(newArr.join('\n'));
}
negativeOrPositiveNumbers(['7', '-2', '8', '9']);
// negativeOrPositiveNumbers(['3', '-2', '0', '-1']);

