function printAndSum(start, end) {
    let buffNumber = "";
    let sum = 0;
    for (let i = start; i <= end; i++) {
        buffNumber += i + " ";
        sum += i;
    }
    console.log(buffNumber);
    console.log("Sum: " + sum);
}
printAndSum(5, 10)