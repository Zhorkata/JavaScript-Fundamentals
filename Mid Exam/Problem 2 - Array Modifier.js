function arrayModifier(array) {

    let myArray = array.shift().split(' ').map(Number);
    let command = array.shift();//swap 1 3

    while (command !== 'end') {

        let commandAsArray = command.split(' ');
       
        if (commandAsArray[0] == 'swap') {
            let a = Number(commandAsArray[1]);
            let b = Number(commandAsArray[2]);
            let temp = myArray[a];
            myArray[a] = myArray[b];
            myArray[b] = temp;
        } else if (commandAsArray[0] == 'multiply') {
            let a = Number(commandAsArray[1]);
            let b = Number(commandAsArray[2]);
            let multiply = myArray[a] * myArray[b];
            myArray[a] = multiply;
        } else if (commandAsArray[0] == 'decrease') {
            for (let i = 0; i < myArray.length; i++) {
                myArray[i] = myArray[i] - 1;
            }
        }
            command = String(array.shift());
        }
        console.log(myArray.join(', '));
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
console.log(`------ANITHER CASE------`);
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
])
