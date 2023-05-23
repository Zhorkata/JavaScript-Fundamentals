function factorialDivision(numOne, numTwo) {
    let resultOne = 1;
    let resultTwo = 1;

    for (let i = 2; i <= numOne; i++) {
        resultOne *= i;//120
    }

    for (let j = 2; j <= numTwo; j++) {
        resultTwo *= j;//2
    }
    console.log((resultOne / resultTwo).toFixed(2));
}
factorialDivision(5, 2);
factorialDivision(6, 2);

//The only difference here is that I used RETURN  \/

// function factorialDivision(firstNumber, secondNumber) {
//     let factorialFirst = 1;
//     let factorialSecond = 1;

//     for (let i = 2; i <= firstNumber; i++) {
//         factorialFirst *= i;//120
//     }

//     for (let i = 2; i <= secondNumber; i++) {
//         factorialSecond *= i;//2
//     }

//     return (factorialFirst / factorialSecond).toFixed(2);//60.00
// }
// factorialDivision(5, 2);
// factorialDivision(6, 2);