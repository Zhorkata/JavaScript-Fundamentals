function rotateArray(arr) {
    let newArr = [];
    let rotationCount = arr[arr.length - 1];// 2 and 15

    for (let i = 0; i < rotationCount -1 ; i++) {

        for (let j = 0; j < arr.length - 1; j++) {
             let firstElement = arr[j];//1
             newArr.push(firstElement);
        }
    }
    console.log(newArr);
} rotateArray(['1', '2', '3', '4', '2'])
console.log("---------------");
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])

// function rotateArray(arrayInput) {
//     let array = arrayInput;
//     let rotations = Number(array[array.length - 1]);
//     array.pop();
//     let arrayLength = array.length - 1;
//     while (rotations > 0) {
//         for (let i = 0; i < arrayLength; i++){
//            let temp = array[i];
//            array[i] = array[arrayLength];
//            array[arrayLength] = temp;
//         }
//         rotations--;
//     }
//     console.log(array.join(' '));
// }
// rotateArray(['1', '2', '3', '4', '2'])