function division(num) {
    let divNum = 0;
    if (num % 10 === 0) {
        divNum = 10;
        console.log(`The number is divisible by ${divNum}`);
    } else if (num % 7 === 0) {
        divNum = 7;
        console.log(`The number is divisible by ${divNum}`);
    } else if (num % 2 === 0 && num % 3 === 0) {
        divNum = 6;
        console.log(`The number is divisible by ${divNum}`);
    } else if (num % 3 === 0) {
        divNum = 3;
        console.log(`The number is divisible by ${divNum}`);
    } else if (num % 2 === 0) {
        divNum = 2;
        console.log(`The number is divisible by ${divNum}`);
    } else {
        console.log('Not divisible');
    }
}
division(7)