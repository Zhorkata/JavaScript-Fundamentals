function burgerBus(inputArray) {
    let numberOfCities = Number(inputArray.shift());
    let totalExpenses = 0;
    let totalIncome = 0;
    let cityCount = 1;

    for (let i = 0; i < numberOfCities; i++) {

        let cityName = inputArray[0];
        let income = Number(inputArray[1]);
        let expenses = Number(inputArray[2]);

        if (cityCount % 3 === 0 && cityCount % 5 !== 0) {
            expenses = expenses * 1.5;
        }
        if (cityCount % 5 === 0) {
            income *= .9;
        }

        totalIncome += income;
        totalExpenses += expenses;

        let profit = income - expenses;
        console.log(`In ${cityName} Burger Bus earned ${profit.toFixed(2)} leva.`);

        let cityArray = inputArray.splice(0, 3);
        cityCount++;
        
    }
    let totalProfit = totalIncome - totalExpenses;
    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);
}
burgerBus([
    "3",
    "Sofia",
    "895.67",
    "213.50",
    "Plovdiv",
    "2563.20",
    "890.26",
    "Burgas",
    "2360.55",
    "600.00"]);
console.log(`--------case-----`);
burgerBus([
    "5",
    "Lille",
    "2226.00",
    "1200.60",
    "Rennes",
    "6320.60",
    "5460.20",
    "Reims",
    "600.20",
    "452.32",
    "Bordeaux",
    "6925.30",
    "2650.40",
    "Montpellier",
    "680.50",
    "290.20",
])