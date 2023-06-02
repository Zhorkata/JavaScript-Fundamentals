function computerStore(numbers) {
    // let command = numbers.pop();//special
    let numLen = numbers.length;
    // let command = numbers[numbers.length - 1];

    let priceWithoutTaxes = 0;
    let totalPrice = 0;
    let taxes = 0;
    for (let i = 0; i < numLen; i++) {

        let currentPrice = Number(numbers[i]);//1050

        if (currentPrice <= 0) {
            console.log('Invalid price!');
            continue;
        }

        if (numbers[i] == 'special' || numbers[i] == 'regular') {
            if (numbers[i] == 'special') {
                totalPrice *= 0.9;
               
                console.log('Congratulations you\'ve just bought a new computer!');
                console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
                console.log(`Taxes: ${taxes.toFixed(2)}$`);
                console.log('-----------');
                console.log(`Total price: ${totalPrice.toFixed(2)}$`);
            }
            else{
                if(totalPrice === 0){
                    console.log('Invalid order!');
                    break;
            }
                console.log('Congratulations you\'ve just bought a new computer!');
                console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
                console.log(`Taxes: ${taxes.toFixed(2)}$`);
                console.log('-----------');
                console.log(`Total price: ${totalPrice.toFixed(2)}$`);
            }
            break;
        }

        priceWithoutTaxes += currentPrice;//1023...1544.96
        taxes += currentPrice * 0.2;//204.6...308.992
        totalPrice = priceWithoutTaxes + taxes;//1227.6...1853.95
    }
}
computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
])
console.log('===============Another output=================');
computerStore([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 
    'regular'
    ])
console.log('==============Another output==================');
computerStore([
'regular'
])


    




