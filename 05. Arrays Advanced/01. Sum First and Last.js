function sumFirstAndLast(numbers) {

    let firstNum = Number(numbers.shift());
    let LastNum = Number(numbers.pop());
    let result = firstNum + LastNum;
    console.log(result);
}
// sumFirstAndLast(['20', '30', '40'])
sumFirstAndLast(['5', '10'])