function bossRush(input) {
    const pattern = /([\|])(?<name>[A-Z]{4,})\1:([#])(?<title>[A-Z][a-z]+ [A-Za-z]+)\3/;
    let output = "";

    for (let i = 1; i < input.length; i++) {
        const exec = pattern.exec(input[i]);
        if (exec) {
            const name = exec.groups['name'];
            const title = exec.groups['title'];
            output += `${name}, The ${title}\n`;
            output += `>> Strength: ${name.length}\n`;
            output += `>> Armor: ${title.length}\n`;
        } else {
            output += "Access denied!\n";
        }
    }
    console.log(output);
}
// Test case 1
console.log("---------CASE 1 -------");
bossRush([
    '3',
    '|PETER|:#Lead architect#',
    '|GEORGE|:#High Overseer#',
    '|ALEX|:#Assistant Game Developer#'
]);

// Test case 2
console.log("---------CASE 2 -------");
bossRush([
    '3',
    '|STEFAN|:#H1gh Overseer#',
    '|IVAN|:#Master detective#',
    '|KARL|: #Marketing lead#'
]);
