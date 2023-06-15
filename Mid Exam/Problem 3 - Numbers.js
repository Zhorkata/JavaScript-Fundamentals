function numbers(array) {
    array = array.toString().split(' ').map(Number);
    let sum = 0;

    for (let num of array) {
        sum += num;
    }
    // for (let i = 0; i < array.length; i++) {
    //     sum += array[i];
    // }

    let average = sum / array.length;//28.076923076923077
    let newArr = [];//top 5
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] > average) {
            newArr.push(array[i]);
        }
    }
    
    if (newArr.length > 0) {
        newArr.sort((a, b) => b - a);
        console.log(newArr.slice(0,5).join(' '));
    } else {
        console.log('No');
    }
}
numbers(['10 20 30 40 50']);
console.log(`------ANOTHER CASE------`);
numbers(['5 2 3 4 -10 30 40 50 20 50 60 60 51'])
console.log(`------ANOTHER CASE------`);
numbers(['1'])
console.log(`------ANOTHER CASE------`);
numbers(['-1 -2 -3 -4 -5 -6'])


