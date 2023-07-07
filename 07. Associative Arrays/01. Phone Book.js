function phoneBook(input) {
    let phoneBook = {};

    for (let i = 0; i < input.length; i++) {

        let [name, number] = input[i].split(' ');
        phoneBook[name] = number
    }
    for (const name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`);
    }
}
phoneBook([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
])
console.log(`----ANOTHER---CASE----`);
phoneBook([
    'George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344'
])