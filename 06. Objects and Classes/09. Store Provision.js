function store(currentStock, currentStock) {

    for (let i = 0; i < currentStock.length; i += 2) {
        let currentProduct = currentStock[i];
        let quantityOfCurrentProduct = Number(currentStock[i + 1]);

        if (currentStock.includes(currentProduct)) {
            let indexOfCurrProduct = currentStock.indexOf(currentProduct);
            currentStock[indexOfCurrProduct + 1] = Number(currentStock[indexOfCurrProduct + 1]) + quantityOfCurrentProduct;
        } else {
            currentStock.push(currentProduct);
            currentStock.push(quantityOfCurrentProduct);
        }
    }
    for (let i = 0; i < currentStock.length; i += 2) {
        let productType = currentStock[i];
        let productQuantity = Number(currentStock[i + 1]);

        let productAsObjects = {
            productType: productType,
            productQuantity: productQuantity
        }
        console.log(`${productAsObjects.productType} -> ${productAsObjects.productQuantity}`);
    }
}
store([
'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
], [
'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
])
