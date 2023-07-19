function partyTime(input) {
    let obj = {};
    let index = 0;

    while(input[index] != 'PARTY'){
        let firstChar = input[index][0];
        if(!isNaN(firstChar)){
            
            //its number and its VIP
            // console.log(firstChar);
        }else{
            //its NAN its regular
            console.log(firstChar);
        }
        
        // console.log(input[index]);
        index++;
    }
    // for (let i = 0; i < input.length; i++) {
    // }
}
partyTime([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
])
