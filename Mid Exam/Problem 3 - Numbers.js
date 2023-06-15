// function numbers(array) {

//     array = split(' ').map(Number);
//     let sum = 0;
//     let numCount = 0;

//     for (let num of array) {
//         sum += num;
//         numCount++;

//     }

//     let average = sum / array.length;

//     let newArr = [];//top 5

//     newArr.sort((a, b) => b - a);


//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > average) {
//             newArr.push(array[i]);

//         }
//     }
//     if(numCount > 1){
//         let result = newArr.join(' ');
//         console.log(result.slice(0, 14));
//     }else if(numCount <= 1){
//         console.log('No');
//     }
    
// }
function numbers(array) {
    let myArray = array.shift().split(' ').map(Number);

    let sum = 0;
    let average = 0;

    for (let num of myArray) {
        sum += num;
    }

    average = sum / myArray.length;

    let newArr = [];

    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] > average) {
            newArr.push(myArray[i]);
        }
    }

    newArr.sort((a, b) => b - a);

    if (newArr.length <= 14) {
        console.log(newArr.join(' '));
    } else {
        console.log(newArr.slice(0, 14).join(' '));
    }
}
numbers(['10 20 30 40 50']);
console.log(`------ANOTHER CASE------`);
numbers(['5 2 3 4 -10 30 40 50 20 50 60 60 51'])
console.log(`------ANOTHER CASE------`);
numbers(['1'])
console.log(`------ANOTHER CASE------`);
numbers(['-1 -2 -3 -4 -5 -6'])

