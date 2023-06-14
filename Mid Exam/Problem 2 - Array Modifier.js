function arrayModifier(array) {

    let myArray = array.shift().split(' ').map(Number);
    let command = array.shift();//swap 1 3
    // console.log(command);
    while (command !== 'end') {

        let commandAsArray = command.split(' ');
       
        switch (command) {
            case 'swap':

                let x = Number(commandAsArray[1]);
                let y = Number(commandAsArray[2]);
                let temp = myArray[x];
                myArray[x] = myArray[y];
                myArray[y] = temp;
                break;
            case 'multiply':
                //current index num multiply by the other
                x = Number(commandAsArray[1]);
                y = Number(commandAsArray[2]);
                let multiply = myArray[x] * myArray[y];
                myArray[x] = multiply;
                break;
            case 'decrease':
                for (let i = 0; i < myArray.length; i++) {
                    myArray[i] = myArray[i] - 1;
                }
                //all nums - 1
                break;
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
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
])
