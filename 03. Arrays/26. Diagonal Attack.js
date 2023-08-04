function checkDiagonalSum(matrix) {
    // Parse the input into a matrix of numbers
    matrix = matrix.map(row => row.split(' ').map(Number));

    // Check the size of the matrix
    const size = matrix.length;

    // Calculate the sum of the main diagonal
    let mainSum = 0;
    for (let i = 0; i < size; i++) {
        mainSum += matrix[i][i];
    }

    // Calculate the sum of the secondary diagonal
    let secondarySum = 0;
    for (let i = 0; i < size; i++) {
        secondarySum += matrix[i][size - i - 1];
    }

    // Check if the sums are equal
    if (mainSum !== secondarySum) {
        // If the sums are different, print the original matrix and return
        for (let i = 0; i < size; i++) {
            console.log(matrix[i].join(' '));
        }
        return;
    }

    // Create a new matrix with the diagonal sum
    const newMatrix = [];
    for (let i = 0; i < size; i++) {
        const newRow = [];
        for (let j = 0; j < size; j++) {
            newRow.push(i !== j && i !== size - j - 1 ? mainSum : matrix[i][j]);
        }
        newMatrix.push(newRow);
    }

    // Print the new matrix
    for (let i = 0; i < size; i++) {
        console.log(newMatrix[i].join(' '));
    }
}
checkDiagonalSum([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
])