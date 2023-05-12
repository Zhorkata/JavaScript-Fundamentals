function pyramid(base, increment) {

    let stoneNeeded = 0;
    let marbleNeeded = 0;
    let lapisNeeded = 0;
    let steps = 0;
    let currentbase = base;

    while (currentbase > 2) {
        let marbel = currentbase * 4 - 4;
        let stone = currentbase * currentbase - marbel;
        stoneNeeded += stone;

        steps++;
        if (steps % 5 === 0) {
            lapisNeeded += marbel;
        } else {
            marbleNeeded += marbel;
        }
        currentbase -= 2;
    }
    steps++;
    let gold = currentbase * currentbase;

    stone = Math.ceil(stoneNeeded * increment);
    marble = Math.ceil(marbleNeeded * increment);
    lapis = Math.ceil(lapisNeeded * increment);
    totalgold = Math.ceil(gold * increment);
    totalHeight = Math.floor(steps * increment);

    console.log(`Stone required: ${stone}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis Lazuli required: ${lapis}`);
    console.log(`Gold required: ${totalgold}`);
    console.log(`Final pyramid height: ${totalHeight}`);
} pyramid(12, 1)