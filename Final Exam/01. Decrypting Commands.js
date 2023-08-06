function commands(input) {
    let message = input.shift();
    let line = input.shift();
    let newMessage = message;

    while (line !== 'Finish') {
        let [command, ...rest] = line.split(' ');

        switch (command) {
            case 'Replace':
                newMessage = newMessage.replace(new RegExp(rest[0], 'g'), rest[1]);
                console.log(newMessage);
                break;
            case 'Cut':
                let startIndex = Number(rest[0]);
                let endIndex = Number(rest[1]);
                if (startIndex < 0 || endIndex >= newMessage.length || startIndex > endIndex) {
                    console.log('Invalid indices!');
                } else {
                    newMessage = newMessage.substring(0, startIndex) + newMessage.substring(endIndex + 1);
                    console.log(newMessage);
                }
                break;
            case 'Make':
                if (rest[0] === 'Upper') {
                    newMessage = newMessage.toUpperCase();
                } else if (rest[0] === 'Lower') {
                    newMessage = newMessage.toLowerCase();
                }
                console.log(newMessage);
                break;
            case 'Check':
                if (newMessage.includes(rest[0])) {
                    console.log(`Message contains ${rest[0]}`);
                } else {
                    console.log(`Message doesn't contain ${rest[0]}`);
                }
                break;
            case 'Sum':
                let startIdx = Number(rest[0]);
                let endIdx = Number(rest[1]);
                if (startIdx < 0 || endIdx >= newMessage.length || startIdx > endIdx) {
                    console.log('Invalid indices!');
                } else {
                    let substring = newMessage.substring(startIdx, endIdx + 1);
                    let sum = 0;
                    for (const el of substring) {
                        let digit = el.charCodeAt();
                        sum += digit;
                    }
                    console.log(sum);
                }
                break;
        }
        
        line = input.shift();
    }
}
commands([
    "ILikeSoftUni",
    "Replace I We",
    "Make Upper",
    "Check SoftUni",
    "Sum 1 4",
    "Cut 1 4",
    "Finish"
])
commands([
    "HappyNameDay",
    "Replace p r",
    "Make Lower",
    "Cut 2 23",
    "Sum -2 2",
    "Finish"
])