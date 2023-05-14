function addSubstract(arr) {
    let original = 0;
    let result = 0;
    for (i = 0; i < arr.length; i++) {
        original += arr[i];
        if (arr[i] % 2 === 0) {
            arr[i] += i;
        } else {
            arr[i] -= i;
        }
        result += arr[i]
    }
    console.log(arr);// [5, 14, 21, 59, 31 ]
    console.log(original);//134
    console.log(result);//130
}
addSubstract([5, 15, 23, 56, 35])