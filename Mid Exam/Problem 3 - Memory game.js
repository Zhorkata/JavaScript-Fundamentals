function memoryGame(input) {

    let sequenceOfElements = input.shift();//get first row from main array
    sequenceOfElements = sequenceOfElements.split(' ');//convert it from string to array
    let moves = 0;


    // let command = input;//'1 0'
for (let command of input) {
    while (command !== 'end') {
        for (let i = 0; i < input.length; i++) {

            if (sequenceOfElements[i] === sequenceOfElements[i + 1]) {
                let matchedNum = sequenceOfElements[i];//get one of the mathed numbers
                let newArr = sequenceOfElements.splice(0, 2);//["1" , "1"]// we use it only for modify our row
                // command = command.split(' ');
                // let currentIndex = command[i];

                //after that 'sequenceOfElements' === rest of the row
                moves++;
                let currentRow = command[i].split(' ');
            }
             else if (currentRow[i] < 0 || currentRow[i + 1] < 0) {
                    console.log('Invalid input! Adding additional elements to the board');
                }
                console.log(`Congrats! You have found matching elements - ${matchedNum}!`);
            

                if (command === 'end') {
                    console.log(`Sorry you lose :( ${sequenceOfElements.join(' ')}`);
                    break;
                }

            }
        }
    }
    
}
    

} memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
])
memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
])
memoryGame([
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"
])

