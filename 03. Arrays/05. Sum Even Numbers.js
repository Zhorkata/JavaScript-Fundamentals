function sumEvenNums(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
        if (arr[i] % 2 === 0) {
            sum += arr[i]
        }
    }
    console.log(sum);
}
sumEvenNums(['1', '2', '3', '4', '5', '6'])
sumEvenNums(['3', '5', '7', '9'])
sumEvenNums(['2', '4', '6', '8', '10'])
// console.log('----');
// function sumEvenNumbers(inputArr) {
//     let sum = 0;
//     for (let num of inputArr) {
//         if (num % 2 == 0) {
//             sum += Number(num);
//         }
//     }
//     console.log(sum);
// }
// sumEvenNumbers(['1', '2', '3', '4', '5', '6'])
// sumEvenNumbers(['3','5','7','9'])
// sumEvenNumbers(['2','4','6','8','10'])
