function messagesManager(input) {
    let capacity = input.shift();
    let users = {};

    for (let line of input) {
        if (line === 'Statistics') {
            break;
        }

        let [command, username, sent, received] = line.split('=');

        switch (command) {
            case 'Add':
                if (!users.hasOwnProperty(username)) {
                    users[username] = { sent: Number(sent), received: Number(received) };
                }
                break;
            case 'Message':
                let sender = username;
                let receiver = sent;

                if (users.hasOwnProperty(sender) && users.hasOwnProperty(receiver)) {
                    users[sender].sent++;
                    users[receiver].received++;

                    if (users[sender].sent + users[sender].received >= capacity) {
                        delete users[sender];
                        console.log(`${sender} reached the capacity!`);
                    }

                    if (users[receiver].sent + users[receiver].received >= capacity) {
                        delete users[receiver];
                        console.log(`${receiver} reached the capacity!`);
                    }
                }
                break;
            case 'Empty':
                if (username === 'All') {
                    users = {};
                } else if (users.hasOwnProperty(username)) {
                    delete users[username];
                }
                break;
        }
    }

    console.log(`Users count: ${Object.keys(users).length}`);
    for (let username in users) {
        let messages = users[username];
        let totalMessages = messages.sent + messages.received;
        console.log(`${username} - ${totalMessages}`);
    }
}
console.log(`------------CASE 1-----------`);
messagesManager([
    "10",
    "Add=Berg=9=0",
    "Add=Kevin=0=0",
    "Message=Berg=Kevin",
    "Add=Mark=5=4",
    "Statistics"
])
console.log(`------------CASE 2-----------`);
messagesManager([
    "20",
    "Add=Mark=3=9",
    "Add=Berry=5=5",
    "Add=Clark=4=0", "Empty=Berry",
    "Add=Blake=9=3",
    "Add=Michael=3=9",
    "Add=Amy=9=9", "Message=Blake=Amy",
    "Message=Michael=Amy",
    "Statistics"
])
console.log(`------------CASE 3-----------`);
messagesManager([
    "12",
    "Add=Bonnie=3=5",
    "Add=Johny=4=4",
    "Empty=All",
    "Add=Bonnie=3=3",
    "Statistics"
])

