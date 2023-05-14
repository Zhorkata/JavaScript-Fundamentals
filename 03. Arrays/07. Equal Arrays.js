function equalArray(arr, arr2) {
    let areEqual = true;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
        if (arr[i] != arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;
        } else {
            sum += arr[i];
        }
    }
    if (areEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
    for (let i = 0; i < arr2.length; i++) {
        arr2[i] = Number(arr2[i]);
    }
}
equalArray
    (['10', '20', '30'], ['10', '20', '30'])
// (['1','2','3','4','5'], ['1','2','4','4','5'])
//(['1'], ['10'])