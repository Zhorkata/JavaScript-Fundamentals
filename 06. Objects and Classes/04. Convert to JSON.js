function convertToJSON(name, lastName, hairColor) {
    let object = {
        name,
        lastName,
        hairColor,
    };
    let result = JSON.stringify(object);
    console.log(result);
}
convertToJSON('George', 'Jones', 'Brown')