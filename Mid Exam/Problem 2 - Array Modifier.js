function arrayModifier(array){
    let values = array.shift().split(' ');
    let row = array[0].split(' ');
    let command = row[0];
    console.log(values);
    console.log(row);
    console.log(command);

}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
])
arrayModifier([
        '1 2 3 4',
        'swap 0 1',
        'swap 1 2',
        'swap 2 3',
        'multiply 1 2',
        'decrease',
        'end'
])