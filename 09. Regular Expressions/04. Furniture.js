function furniture(input) {

    let pattern = /[>]{2}(?<product>[A-Za-z]+)<<(?<price>\d+\.*\d+)!(?<quantity>\d+)/g
    let spendMoney = 0;

    let command = input.shift();

    console.log(`Bought furniture:`);
    while (command !== 'Purchase') {
        let productRow = command;
        let validProduct = pattern.exec(productRow);

        while (validProduct !== null) {
            const currentProduct = validProduct.groups.product;
            console.log(currentProduct);
            const currentPrice = validProduct.groups.price;
            const currentQuantity = validProduct.groups.quantity;

            spendMoney += currentPrice * currentQuantity;

            validProduct = pattern.exec(productRow)
        }

        command = input.shift();
    }
    console.log(`Total money spend: ${spendMoney.toFixed(2)}`)
}
console.log(`--------CASE 1-------`);
furniture([
    '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
])
console.log(`--------CASE 2-------`);
furniture([
    '>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase'
])
console.log(`--------CASE 3-------`);
furniture([
    '>Invalid<<!4',
    '>Invalid<<!2',
    '>Invalid<<!5',
    'Purchase'
])
