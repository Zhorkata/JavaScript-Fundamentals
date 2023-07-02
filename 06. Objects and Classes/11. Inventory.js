function inventory(array) {
    let heroes = [];

    for (let i = 0; i < array.length; i++) {
        let [heroName, heroLevel, items] = array[i].split(' / ');//split each element
        let itemArray = items.split(', ');//add each item in array

        heroes.push({
            name: heroName,
            level: Number(heroLevel),
            items: itemArray,
        });
    }

    heroes.sort((a, b) => a.level - b.level);

    for (let i = 0; i < heroes.length; i++) {
        let { name, level, items } = heroes[i];
        let itemsString = items.join(', ');

        console.log(`Hero: ${name}`);
        console.log(`level => ${level}`);
        console.log(`items => ${itemsString}`);
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])
console.log(`-------------case------------`);
inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
])
