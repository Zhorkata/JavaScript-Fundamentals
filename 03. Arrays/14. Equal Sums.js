function equalSums(arr) {
    let result = 'no';
    for (let i = 0; i < arr.length; i++) {
        let rightSum = 0;
        let leftSum = 0;
        for (let right = i + 1; right < arr.length; right++) {
            rightSum += arr[right];
        }
        for (let left = 0; left < i; left++) {
            leftSum += arr[left];
        }
        if (leftSum == rightSum) {
            result = i;
        }
    }
    console.log(result);
}
equalSums([1, 2, 3, 3]);
