function nXnMatrix(num) {
    let matrix = [];

    for (let i = 0; i < num; i++) {
        let buff = '';
        for (let k = 0; k < num; k++) {
            buff += num + ' ';
        }
        matrix.push(buff);
    }
    console.log(matrix.join('\n'));
}
nXnMatrix(5)