function distinctArray(array) {
    let copyArray = array.slice(0);
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        let temp = copyArray[i];
        if (!newArr.includes(temp)) {
            newArr.push(temp)
            //console.log(copyArray[i]);
        }
    }
    console.log(newArr.join(' '));

}
distinctArray([1, 2, 3, 4])
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])
distinctArray([20, 8, 12, 13, 4, 4, 8, 5])