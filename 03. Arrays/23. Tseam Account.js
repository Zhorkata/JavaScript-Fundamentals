function tseamAccount(array) {
    let account = array[0].split(' ');
    let arrayL = array.length - 1;
    
    for (let i = 1; i < arrayL; i++) {
        let command = array[i].split(' ');

        if (command[0] === 'Play!') {
            break;
        }
        switch (command[0]) {
            case 'Install':
                if (account.includes(command[1])) {
                    break;
                } else {
                    account.push(command[1]);
                }
                break;
            case 'Uninstall':
                if (account.includes(command[1])) {
                    let index = account.indexOf(command[1]);
                    account.splice(index, 1)
                }
                break;
            case 'Update':
                if (account.includes(command[1])) {
                    let index = account.indexOf(command[1]);
                    let temp = account[index];
                    account.splice(index, 1);
                    account.push(temp);
                }
                break;
            case 'Expansion':
                let gameOfExpansion = command[1].split("-");
                if (account.includes(gameOfExpansion[0])) {
                    let index = account.indexOf(gameOfExpansion[0]);
                    let expansionGame = `${gameOfExpansion[0]}:${gameOfExpansion[1]}`
                    account.splice(index + 1, 0, expansionGame);
                }
        }
    }
    console.log(account.join(" "))
}
tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!'])
