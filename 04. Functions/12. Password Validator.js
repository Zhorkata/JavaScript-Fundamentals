function passValidator(password) {
    let passLength = password.length;
    let digits = 0;

    for (let i = 0; i < passLength; i++) {
        let num = password[i].charCodeAt();//48
        // let curSymbol = password[i];// l, o ....

        // The length should be 6 - 10 characters (inclusive)
        if (passLength >= 6 && passLength < 11) {

            // It should consist only of letters and digits
            // A - 65     Z - 90   a - 97     z - 122     0 - 48      9 - 57
            if ((num >= 65 && num <= 90) || (num >= 97 && num <= 122) || (num >= 48 && num <= 57)) {
                // • It should have at least 2 digits   //48 - 0      57 - 9
                // curSymbol = password[i].charCodeAt();
                if (num >= 48 && num <= 57) {
                    digits++;

                    if (digits >= 2) {
                        console.log('Password is valid');
                        break;
                    }
                }
            } else {
                console.log('Password must consist only of letters and digits');
                console.log('Password must have at least 2 digits');
                break;
            }
        } else {
            console.log('Password must be between 6 and 10 characters');
            console.log('Password must have at least 2 digits');
            break;
        }
    }
}
passValidator('logIn'); //ok
console.log('-------');
passValidator('MyPass123')//  OK
console.log('-------');
passValidator('Pa$s$s')// OK
