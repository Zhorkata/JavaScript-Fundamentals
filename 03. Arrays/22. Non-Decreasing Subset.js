function subset(arr){
    let newArr = [];
    let maxNum = 0;
    for(let curNum of arr) {
        if(curNum >= maxNum){
            newArr.push(curNum);
            maxNum = curNum;
        }
    }
console.log(newArr.join(" "))
}
subset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
subset([1, 2, 3, 4]);
subset([20, 3, 2, 15, 6, 1]);
