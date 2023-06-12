function memoryGame(input) {
    let sequence = input.shift().split(' ');//get first row of input and split each element in it
    let index = 0;
    let command = input[index++];//command will be every next row
    let moves = 0;

    while (command != 'end') {
        let positions = command.split(' ').map(Number);//first: split the elements then: convert from string to integer
        let positionOne = positions[0];//get first position
        let positionTwo = positions[1];//get second position

        moves++;//increase moves

        if (positionOne == positionTwo || (positionOne || positionTwo) > sequence.length - 1 || (positionOne || positionTwo) < 0) {
            console.log('Invalid input! Adding additional elements to the board');
            sequence.splice(sequence.length / 2, 0, `-${moves}a`, `-${moves}a`);
            command = input[index++];
            continue;//we will skip the rest of the code
        }

        if (sequence[positionOne] != sequence[positionTwo]) {
            console.log('Try again!');
        } else {
            console.log(`Congrats! You have found matching elements - ${sequence[positionOne]}!`);
            sequence.splice(Math.max(positionOne, positionTwo), 1);
            sequence.splice(Math.min(positionOne, positionTwo), 1);
        }

        if (sequence.length == 0) {
            console.log(`You have won in ${moves} turns!`);
            break;
        }
        command = input[index++];
    }
    if (sequence.length > 0) {
        console.log(`Sorry you lose :(\n${sequence.join(' ')}`);
    }
}
console.log('-------------CASE 1--------------\n');

memoryGame([
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"
])
console.log('\n-------------CASE 2--------------\n');

memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
])
console.log('\n-------------CASE 3--------------\n');

memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
])
