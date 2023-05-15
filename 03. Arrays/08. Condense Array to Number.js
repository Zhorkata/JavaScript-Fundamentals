function condenseArrayToNumber(arr) {
    while(arr.length > 1){
        let condensedArr = [];//create a new empty array
        for (let i = 0; i < arr.length - 1; i++) {
            let curNum = Number(arr[i]);//5
            let nextNum = arr[i + 1];//5 4 5 3
            let sum = curNum + nextNum;
            condensedArr.push(sum);
        }
        arr = condensedArr;
    }
    console.log(arr[0]);
}
condenseArrayToNumber([2, 10, 3]) //its ok!
condenseArrayToNumber([5, 0, 4, 1, 2])
condenseArrayToNumber([1])
