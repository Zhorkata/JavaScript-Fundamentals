function counterStrike(input) {
    let energy = Number(input[0]);
    let count = 0;

        for (let i = 1; i < input.length; i++) {
            if(input[i] === "End of battle"){
                console.log(`Won battles: ${count}. Energy left: ${energy}`);
                break;
            }
            energy -= input[i];//94
            count++;//4
            if (count % 3 === 0) {
                energy += count;//107
            }
            if (energy <= 0) {
                console.log(`Not enough energy! Game ends with ${count} won battles and ${energy} energy`);
                break;
            }
            
        }

}
counterStrike
    (["100",
        "10",
        "10",
        "10",
        "1",
        "2",
        "3",
        "73",
        "10"])
console.log(`------Another Case------`);
counterStrike
    (["200",
        "54",
        "14",
        "28",
        "13",
        "End of battle"])

