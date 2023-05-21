// USING SWITCH - CASE

function simpleCalculator(firstNum, secondNum, operation) {
    let result = 0;
    switch (operation) {
        case 'multiply': result = firstNum * secondNum; break;
        case 'add': result = firstNum + secondNum; break;
        case 'divide': result = firstNum / secondNum; break;
        case 'subtract': result = firstNum - secondNum; break;
    }
    console.log(result);
}
simpleCalculator(5, 5, 'multiply')
simpleCalculator(40, 8, 'divide')
simpleCalculator(12, 19, 'add')
simpleCalculator(50, 13, 'subtract')

//USING IN OPERATOR

// function simpleCalculator(firstNum, secondNum, operation) {
//     let operations = {
//         multiply: (firstNum, secondNum) => firstNum * secondNum,
//         add: (firstNum, secondNum) => firstNum + secondNum,
//         divide: (firstNum, secondNum) => firstNum / secondNum,
//         subtract: (firstNum, secondNum) => firstNum - secondNum,
//     }
//     // Check if the specified operation exists in the operations object
//     if (operation in operations) {
//         // Call the corresponding operation function and return the result
//         return operations[operation](firstNum, secondNum);
//     } else {
//         // Handle invalid operation
//         console.log("Invalid operation");
//         return null;
//     }
// }
// console.log(simpleCalculator(5, 5, 'multiply'));  // Output: 25
// console.log(simpleCalculator(40, 8, 'divide'));   // Output: 5
// console.log(simpleCalculator(12, 19, 'add'));     // Output: 31
// console.log(simpleCalculator(50, 13, 'subtract'));// Output: 37


// function simpleCalculator(firstNum, secondNum, operation) {
//     let operations = {
//         multiply: (firstNum, secondNum) => firstNum * secondNum,
//         add: (firstNum, secondNum) => firstNum + secondNum,
//         divide: (firstNum, secondNum) => firstNum / secondNum,
//         subtract: (firstNum, secondNum) => firstNum - secondNum,
//     };

//     // Check if the specified operation is a valid property of the operations object
//     if (operations.hasOwnProperty(operation)) {
//         // Call the corresponding operation function and return the result
//         return operations[operation](firstNum, secondNum);
//     } else {
//         // Handle invalid operation
//         console.log("Invalid operation");
//         return null;
//     }
// }
// console.log(simpleCalculator(5, 5, 'multiply'));  // Output: 25
// console.log(simpleCalculator(40, 8, 'divide'));   // Output: 5
// console.log(simpleCalculator(12, 19, 'add'));     // Output: 31
// console.log(simpleCalculator(50, 13, 'subtract'));// Output: 37
