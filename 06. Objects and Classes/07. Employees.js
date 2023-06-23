function employees(input){
    input.forEach(name => {name.split(',')

    console.log(`Name: ${name} -- Personal Number: ${name.length}`);
    });
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])