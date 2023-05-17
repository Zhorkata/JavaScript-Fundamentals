function printNthElement(arr) {
    let step = arr[arr.length - 1];//2
    while (arr.length > 1) {
        let myArr = [];
        for (let i = 0; i < arr.length - 1; i++) {
            if (i % step === 0) {
                myArr.push(arr[i]);
            }
        }
        console.log(myArr.join(" "));//5 20 31 4 20
        arr = myArr - 2;
    }
}
printNthElement(['5', '20', '31', '4', '20', '2'])
printNthElement(['dsa', 'asd', 'test', 'test', '2'])
printNthElement(['1', '2', '3', '4', '5', '6'])