function account(arr){
    let commands = arr;//copy array
    let finalAcc = [];
    for(let i = 1; i < arr.length; i++){
        // console.log(commands[i]);// 6 rows with commands
        let command = commands[i].split(' ');
        // console.log(command);//several arrays - 6
        let curCommand = command[0];// Install Uninstall Update Expansion Play!
        let curGame = command[1];//Lol Wow Diablo Cs-Go undefined
        let account = commands[0];//CS WoW Diablo

        switch(curCommand){
            case 'Install':
                finalAcc.push(account + ' ' + curGame);// CS WoW Diablo LoL
                console.log(finalAcc);
                break;
            case 'Uninstall':
                // if(account.includes(curGame)){
                //     finalAcc += " ";
                // }
                let index = finalAcc.indexOf('WoW');
                if(index > -1){
                    finalAcc.splice(index, 1);
                }

                console.log(finalAcc.slice());


                //to do
                break;
            case 'Update':
                //to do 
                break;
            case 'Expansion':
                //to do
                break;
        }
    }
    // while(commands !== 'Play!'){
    // }
}
account(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!'])