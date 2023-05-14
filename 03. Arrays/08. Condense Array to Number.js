function condenseArrayToNumber(arr) {
    let sum = 0;
    let condenseArr = [];

    for (let num = 0; num < arr.length - 1; num++) {
        let firstNum = Number(arr[num]);//5 0 4 1
        let secondNum = Number(arr[num + 1]);//0 4 1 2
        condenseArr.push(firstNum + secondNum);
    }
    for (let pushed of condenseArr) {
        sum += pushed;
    }
    console.log(sum);
    console.table(condenseArr)
}
condenseArrayToNumber([2, 10, 3]) //its ok!
condenseArrayToNumber([5, 0, 4, 1, 2])
condenseArrayToNumber([1])
