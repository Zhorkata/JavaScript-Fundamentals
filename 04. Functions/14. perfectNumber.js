function perfectNum(num) {
    let sum = 1;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    if (sum === num) {
        console.log('We have a perfect number!');

    } else {
        console.log('It\'s not so perfect.');
    }
}
perfectNum(5)

//With ternary operator and RETURN

// function perfectNum(num) {
//     let sum = 1;
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             sum += i;
//         }
//     }
//     return (sum === num) ? 'We have a perfect number!' : 'It\'s not so perfect.'
// }
// console.log(perfectNum(6));