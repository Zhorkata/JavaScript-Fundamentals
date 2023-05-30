function carWash(array) {
    // let command = array[0];
    // console.log(firstCommand);
    let arrLen = array.length;
    let value = 0;
    for (let i = 0; i < arrLen; i++) {
        let command = array[i];
        switch (command) {
            case 'soap': value += 10; break;//10
            case 'water': value += value * 0.2; break;//12
            case 'vacuum cleaner': value += value * 0.25; break;//15
            case 'mud': value -= value * 0.1; break;
        }
    }
    console.log( value);
    return `The car is ${value.toFixed(2)}% clean.`;
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])