function theImitationGame(input) {

    function replaceAllOccurrences(originalString, find, replace) {
        let index = originalString.indexOf(find);
        while (index !== -1) {
            originalString = originalString.slice(0, index) + replace + originalString.slice(index + find.length);
            index = originalString.indexOf(find, index + replace.length); // Move index forward by replace.length
        }
        return originalString;//llHe
    }

    let message = input.shift();
    let instructions = input.shift();
    let newMessage = message; // Initialize newMessage with the original message

    while (instructions !== 'Decode') {
        let [command, ...rest] = instructions.split('|');

        switch (command) {
            case 'Move':
                let countChar = Number(rest[0]) % newMessage.length;
                let movedPart = newMessage.substring(0, countChar);
                newMessage = newMessage.substring(countChar) + movedPart;
                break;

            case 'Insert':
                let [index, letter] = rest.slice();
                newMessage = newMessage.slice(0, index) + letter + newMessage.slice(index);
                break;

            case 'ChangeAll':
                let [letterA, letterB] = rest;
                newMessage = replaceAllOccurrences(newMessage, letterA, letterB);
                break;
        }

        instructions = input.shift();
    }
    console.log(`The decrypted message is: ${newMessage}`);
}

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);
console.log(`--------CASE 2-------`);
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
])



