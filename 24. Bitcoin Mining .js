function mining(input) {
    let index = 0;
    let day = 0;
    let totalMoney = 0;
    let pricePerBitcoin = 11949.16;//lv
    let pricePerGramOfGold = 67.51;//lv
    let bitcoin = 0;
    let purchaseDays = 0;

    for (let i = 0; i < input.length; i++) {
        day++;
        let goldGramsPerDay = input[index];//100 200 300
        index++;
        if (day % 3 === 0) {
            goldGramsPerDay *= 0.7;
        }
        totalMoney += goldGramsPerDay * pricePerGramOfGold;
        while (totalMoney > pricePerBitcoin) {
            totalMoney -= pricePerBitcoin;
            bitcoin++
            if (purchaseDays === 0) {
                purchaseDays = day;
            }
        }
    }
    console.log((`Bought bitcoins: ${bitcoin}`));
    if (bitcoin > 0) {
        console.log((`Day of the first purchased bitcoin: ${purchaseDays}`));
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);

}
mining([100, 200, 300])
mining([50, 100])
mining([3124.15, 504.212, 2511.124])