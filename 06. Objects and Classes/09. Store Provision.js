function store(input,input2) {

    for (let i = 0; i < input.length; i++) {
        let product = input[i];
        let quantity = input[i+1];
        i++
        console.log(`${product} -> ${quantity}`);
    }
}
store([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'
    ]
)
