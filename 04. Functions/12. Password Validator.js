function passwordValidator(password) {

    let passLength = password.length;
    let perfectLength = true;
    let lettersAndDigits = true;
    let twoDigitsOrMore = 0;

    for (let i = 0; i < passLength; i++) {
        let currentCode = password[i].charCodeAt();//80
        let currentChat = password[i].charAt();//'P'
        perfectLength = (passLength >= 6 && passLength <= 10);
        lettersAndDigits = (currentCode >= 65 && currentCode <= 90 || currentCode >= 97 && currentCode <= 122 || currentCode >= 48 && currentCode <= 57);

        if(currentCode >= 48 && currentCode <= 57){
            twoDigitsOrMore++;
        }
        if(!lettersAndDigits){
            lettersAndDigits = false;
            break;
        }

    }
    if (perfectLength && (twoDigitsOrMore >= 2) && lettersAndDigits) {
        console.log("Password is valid");
    }
    if (!lettersAndDigits) {
        console.log('Password must consist only of letters and digits');
    }
    if (!perfectLength) {
        console.log('Password must be between 6 and 10 characters');
    }
    if(!(twoDigitsOrMore >= 2)){
        console.log("Password must have at least 2 digits");

    }
}
passValidator('logIn'); //ok
console.log('-------');
passValidator('MyPass123')//  OK
console.log('-------');
passValidator('Pa$s$s')// OK

