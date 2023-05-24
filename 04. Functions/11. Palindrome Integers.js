function palindromeChecker(integers) {
    let isPalindrome = true;
    for (let i = 0; i < integers.length; i++) {
        let numAsString = integers[i] + '';//convert int to str '323'
        // console.log(numAsString);
        for (let j = 0; j < numAsString.length; j++) {//'323'
            let firstNum = numAsString[0];// '1'
            let lastNum = numAsString[numAsString.length - 1]//'3'

            if (firstNum == lastNum) {
                isPalindrome = true;
                continue;
            } else {
                isPalindrome = false;
                break;
            }
        }
        if (isPalindrome) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}
palindromeChecker([123, 323, 421, 121])
console.log('-------');
palindromeChecker([32, 2, 232, 1010])

// function palindromeIntegers(numberArray) {
//     let numberArrayLength = numberArray.length;
//     for (let index = 0; index < numberArrayLength; index++) {
//         let numAsString = numberArray[index].toString();
//         let reversedString = numAsString.split('').reverse().join('');
//         if (numAsString === reversedString) {
//             console.log(true);
//         } else {
//             console.log(false);
//         }
//     }
// }
// palindromeIntegers(([123, 323, 421, 121]))