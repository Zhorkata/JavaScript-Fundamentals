function ladyBugs(input) {
    let field = [];
    let size = Number(input[0]);
    
    for (let i = 0; i < size; i++) {
        field[i] = 0;
    }
    

    let ladyBugsIndex = input[1].split(' ');
    
    for (let i = 0; i < ladyBugsIndex.length; i++) {
        let index = ladyBugsIndex[i];
        if (field[index] !== undefined) {
            field[index] = 1;
        }
    }

    for (let i = 2; i < input.length; i++) {
        let commands = input[i].split(' ');
        let ladyBugIndex = Number(commands[0]);
        let direction = commands[1];
        let flyLength = Number(commands[2]);

        if(ladyBugIndex >= field.length || ladyBugIndex < 0 || field[ladyBugIndex] == 0){
            continue;
        }
        field[ladyBugIndex] = 0;
        let isFly = true;
        if (direction === 'right') {
            while(isFly){
                if(field[ladyBugIndex + flyLength] === 0){
                    field[ladyBugIndex + flyLength] = 1;
                    isFly = false;
                }else if(field[ladyBugIndex + flyLength] === 1){
                    flyLength += flyLength;
                }else{
                    isFly = false;
                }
            }
        } else {
            while(isFly){
                if(field[ladyBugIndex - flyLength] === 0){
                    field[ladyBugIndex - flyLength] = 1;
                    isFly = false;
                }else if(field[flyLength] === 1){
                    flyLength += flyLength;
                }else{
                    isFly = false;
                }
            }
        }
    }
    console.log(field.join(' '));
}
ladyBugs([3,
    '0 1',
    '0 right 1',
    '2 right 1'])

ladyBugs([3,
    '0 1 2',
    '0 right 1',
    '1 right 1',
    '2 right 1'])

ladyBugs([5,
     '3',
    '3 left 2',
    '1 left -2'])

