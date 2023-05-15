function maxNums(arr) {
    let newArr = [];
    for (let i = 0; i <= arr.length; i++) {
        let curNum = arr[i];
        let bigNum = true;
        for (let j = i + 1; j < arr.length; j++) {
            let curNum2 = arr[j];
            if (curNum <= curNum2) {
                bigNum = false;
            }
        }
        if (bigNum) {
            newArr.push(curNum)
        }
    }
    console.log(newArr.join(" "));
}
maxNums([1, 4, 3, 2]);
