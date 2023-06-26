function inventory(array){
    let levelsAsArray = [];
    
    for (let i = 0; i < array.length; i++) {
        let [heroName, heroLevel, item] = array[i].split(' / ');
        levelsAsArray.push(heroLevel);
        
        sortedLevels = levelsAsArray.sort((a,b)=> a-b);
     
        console.log(`Hero: ${heroName} \nlevel => ${heroLevel} \nitems => ${item}`);
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])
