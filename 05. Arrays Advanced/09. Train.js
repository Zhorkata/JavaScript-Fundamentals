// function train(array) {
//     // let passengersSeats = array.shift();
//     // let maxCapacity = array.shift();
//     let passengersSeats = array.slice(0, 1);
//     let maxCapacity = array.slice(1, 2);

//     for (let i = 2; i < array.length; i++) {

//         let command = array[i];//'Add 10'
//         command = command.split(' ');//['Add', "10"]


//         if (command.includes('Add')) {
//             passengersSeats.push(command[1])
//         }else{
//             passengersSeats[0] = Number(passengersSeats[0]) + Number(command[0])

//         }
//         console.log(passengersSeats);//72 54 21 12 4 75 23 10 0
//     }
// }
// train(['32 54 21 12 4 0 23',
//     '75',
//     'Add 10',
//     'Add 0',
//     '30',
//     '10',
//     '75'])

function train(input) {
    let wagons = input.shift().split(" ").map(Number);
    let maxCapacity = Number(input.shift());
    for (let el of input) {
        el = el.split(" ");
        if (el[0] === "Add") {
            wagons.push(Number(el[1]));
        } else {
            let passengers = Number(el[0]);
            for (let i = 0; i < wagons.length; i++) {
                let sumPasses = wagons[i] + passengers;
                if (sumPasses <= maxCapacity) {
                    wagons[i] = sumPasses;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(" "));
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])