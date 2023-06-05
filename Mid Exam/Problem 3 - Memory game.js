function memoryGame(input) {

    let sequenceOfElements = input.shift();

    for (let i = 0; i < input.length; i++) {

        let command = input[i];//'1 0'

        while (command !== 'end') {
            if(sequenceOfElements[i] === sequenceOfElements[i+2]){
                let newArr = sequenceOfElements.split(' ').splice(0, 2)

                newArr = newArr.slice(0, 2);

            }

        }
        if (command === 'end') {
            console.log("Sorry you lose :( { the current sequence's state}");
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
