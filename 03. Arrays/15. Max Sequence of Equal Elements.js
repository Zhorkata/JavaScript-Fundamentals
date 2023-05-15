function maxSequenceOfEqualElements(arr) {
    let longArr = [];
    for(let i = 0; i < arr.length; i++){
        let newArr = [];
        for(let j = i; j < arr.length;j++){
            if(arr[i] === arr[j]){
                newArr.push(arr[i]);
            }else{
                break;
            }
        }
        if(newArr.length > longArr.length){
            longArr = newArr;
        }
    }
    console.log(longArr.join(' '));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
