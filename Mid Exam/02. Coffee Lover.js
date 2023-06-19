function coffeeLover(input) {
    let coffeeType = input.shift().split(' ');

    for (let i = 1; i <= Number(input[0]); i++) {
        let command = input[i].split(' ');

        if (command[0] === 'Include') {
            let coffee = command[1];
            coffeeType.push(coffee);
        } else if (command[0] === 'Remove') {
            let count = Number(command[2]);

            if (command[1] === 'first') {
                coffeeType.splice(0, count);
            } else if (command[1] === 'last') {
                coffeeType.splice(-count);
            }
        } else if (command[0] === 'Prefer') {
            let index1 = Number(command[1]);
            let index2 = Number(command[2]);

            if (index1 >= 0 && index1 < coffeeType.length && index2 >= 0 && index2 < coffeeType.length) {
                let temp = coffeeType[index1];
                coffeeType[index1] = coffeeType[index2];
                coffeeType[index2] = temp;
            }
        } else if (command[0] === 'Reverse') {
            coffeeType.reverse();
        }
    }

    console.log(`Coffees:\n${coffeeType.join(' ')}`);
}
coffeeLover(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
    "5",
    "Include TurkishCoffee",
    "Remove first 2",
    "Remove last 1",
    "Prefer 3 1",
    "Reverse"]
);
coffeeLover
    (["Arabica Robusta BulkCoffee,StrongCoffee, TurkishCoffee",
        "5",
        "Include OrdinaryCoffee",
        "Remove first 1",
        "Prefer 0 1",
        "Prefer 3 1",
        "Reverse"])