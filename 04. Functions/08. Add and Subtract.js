function addSubtract(firstNum, secondNum, lastNum) {
    function add(first, second) {
        let sumOfTwoNumbers = first + second;
        return sumOfTwoNumbers;
    }
    let sum = add(firstNum, secondNum);
    function subtract(sumOfTwo, last) {
        return sumOfTwo - last;
    }
    let result = subtract(sum, lastNum)
    console.log(result);
}
addSubtract(23,6,10)
