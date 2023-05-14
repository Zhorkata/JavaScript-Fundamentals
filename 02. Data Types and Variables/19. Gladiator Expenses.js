function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let trashedHelmet = 0;
    let trashedSword = 0;
    let trashedShield = 0;
    let armorRepair = 0;

    for (let i = 1; i <= lostFightsCount; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            trashedShield++;//1
        }
        if (i % 3 === 0) {
            trashedSword++;//2
        }
        if (i % 2 === 0) {
            trashedHelmet++;//3?
        }
        if (i % 12 === 0) {
            armorRepair++;
        }
    }
    helmetPrice *= trashedHelmet;//6
    swordPrice *= trashedSword;//6
    shieldPrice *= trashedShield;//4
    armorPrice *= armorRepair;
    let expenses = helmetPrice + swordPrice + shieldPrice + armorPrice;
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200)