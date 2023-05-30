function isMagicalMatrix(matrix) {
    // Check if the matrix is empty
    if (matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }

    // Calculate the sum of the first row
    let sum = 0;
    for (let i = 0; i < matrix[0].length; i++) {
        sum += matrix[0][i];
    }

    // Check the sum of each row
    for (let i = 1; i < matrix.length; i++) {
        let rowSum = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            rowSum += matrix[i][j];
        }
        if (rowSum !== sum) {
            return false;
        }
    }

    // Check the sum of each column
    for (let j = 0; j < matrix[0].length; j++) {
        let colSum = 0;
        for (let i = 0; i < matrix.length; i++) {
            colSum += matrix[i][j];
        }
        if (colSum !== sum) {
            return false;
        }
    }

    // All sums are equal, matrix is magical
    return true;
}
isMagicalMatrix([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
])
