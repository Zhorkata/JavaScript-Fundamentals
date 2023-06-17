function shotForTheWin(input) {
    index = 0;
    let sequence = input[index++]//.split(' ').map(Number);
    let command = input[index++];
    while(command != 'end'){
        let targetIndex = Number(command)

        for (let i = 0; i < input.length; i++) {
            let index0 = -1;
            if (sequence[i] < sequence[i + 1]) {
                let index1 = Number(sequence[i + 1]) - Number(sequence[i]);
            }
            sequence[i++]
    
    
        }
    
    }

}
shotForTheWin
    (["24 50 36 70",
        "0",
        "4",
        "3",
        "1",
        "End"])
console.log(`--------case--------`);
shotForTheWin
    (["30 30 12 60 54 66",
        "5",
        "2",
        "4",
        "0",
        "End"])

