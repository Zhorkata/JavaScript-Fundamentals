function shotForTheWin(input) {
    let index = 0;
    let sequence = input[index++].split(' ').map(Number);
    let command = input[index++];
    while(command != 'End'){
        
        for (let i = 0; i < sequence.length; i++) {
            let targetIndex = Number(command);// 0 4 3 1
            if (sequence[targetIndex] <= sequence[i + 1]) {
                sequence[i] = -1;
                sequence[i+1] = sequence[i+1] - sequence[i];
                
            }
            command = input[index++]
    
    //TODO
        }
    }
// console.log(`Shot targets: ${count} -> ${target.join(' ')}`);
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

