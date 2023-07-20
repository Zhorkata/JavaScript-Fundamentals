function substring(string, startIndex, count) {
    let result = string.substring(startIndex,startIndex + count);
    //substring() can be replace wit slice() method

    console.log(result);
}
substring('ASentence', 1, 8)
