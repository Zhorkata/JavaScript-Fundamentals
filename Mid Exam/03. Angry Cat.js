function angryCat(priceRatings, entryPoint, itemType) {
    let leftDamage = 0;
    let rightDamage = 0;

    for (let i = 0; i < entryPoint; i++) {
        if (itemType === 'cheap' && priceRatings[i] < priceRatings[entryPoint]) {
            leftDamage += priceRatings[i];
        } else if (itemType === 'expensive' && priceRatings[i] >= priceRatings[entryPoint]) {
            leftDamage += priceRatings[i];
        }
    }

    for (let i = entryPoint + 1; i < priceRatings.length; i++) {
        if (itemType === 'cheap' && priceRatings[i] < priceRatings[entryPoint]) {
            rightDamage += priceRatings[i];
        } else if (itemType === 'expensive' && priceRatings[i] >= priceRatings[entryPoint]) {
            rightDamage += priceRatings[i];
        }
    }

    if (leftDamage >= rightDamage) {
        return 'Left - ' + leftDamage;
    } else {
        return 'Right - ' + rightDamage;
    }
}
angryCat(
        [1, 5, 1],
        1,
        "cheap"
        )
angryCat(
    [-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3],
    7,
    "expensive"
        )
angryCat(
[-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3],
7,
"expensive"
        )

