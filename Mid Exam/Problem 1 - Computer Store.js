function computerStore(numbers) {
    let numLen = numbers.length;
    let priceWithoutTaxes = 0;
    let totalPrice = 0;
    let taxes = 0;
    let isSpecial = false;

    for (let i = 0; i < numLen; i++) {
        let currentPrice = Number(numbers[i]);

        if (currentPrice <= 0) {
            console.log('Invalid price!');
            continue;
        }

        if (numbers[i] === 'special' || numbers[i] === 'regular') {
            if (numbers[i] === 'special') {
                isSpecial = true;
            }

            if (totalPrice === 0) {
                console.log('Invalid order!');
                break;
            }

            console.log('Congratulations you\'ve just bought a new computer!');
            console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
            console.log(`Taxes: ${taxes.toFixed(2)}$`);
            console.log('-----------');

            if (isSpecial) {
                totalPrice *= 0.9;
            }

            console.log(`Total price: ${totalPrice.toFixed(2)}$`);
            break;
        }

        priceWithoutTaxes += currentPrice;
        taxes += currentPrice * 0.2;
        totalPrice = priceWithoutTaxes + taxes;
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
]);

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
]);

console.log('==============Another output==================');

computerStore([
    'regular'
]);

