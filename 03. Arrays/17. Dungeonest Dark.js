function dungeonestDark(arr) {
    let rooms = arr[0].split('|');
    let health = 100;
    let gameOver = false;
    let roomCounter = 1;
    let coins = 0;
    for (let room of rooms) {
        let commands = room.split(' ');
        let command = commands[0];
        let value = Number(commands[1]);
        switch (command) {
            case 'potion':
                if (health + value > 100) {
                    value = value - (value + health - 100);//10
                }
                health += value;//increase health
                console.log(`You healed for ${value} hp.`);//
                console.log(`Current health: ${health} hp.`);//100
                break;
            case 'chest':
                coins += value;
                console.log(`You found ${value} coins.`);
                break;
            default:
                health -= value;//decrease health
                if (health > 0) {
                    console.log(`You slayed ${command}.`);
                } else {
                    console.log(`You died! Killed by ${command}.`);
                    gameOver = true;
                    console.log(`Best room: ${roomCounter}`);//We lost :( Next time...
                }
                break;
        }
        roomCounter++;
        if (gameOver) {
            break;
        }
    }
    if (!gameOver) {
        console.log("You've made it!");//We won! Congats!
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
console.log('-------Next-----game-------');
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])
