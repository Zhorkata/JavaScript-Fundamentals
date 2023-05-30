function generateSpiralMatrix(rows, cols) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
      matrix[i] = [];
      for (let j = 0; j < cols; j++) {
        matrix[i][j] = 0;//we create matrix with zeros
      }
    }
  
    let num = 1;
    let topRow = 0, bottomRow = rows - 1, leftCol = 0, rightCol = cols - 1;
  
    while (topRow <= bottomRow && leftCol <= rightCol) {
      // Fill top row from left to right
      for (let i = leftCol; i <= rightCol; i++) {
        matrix[topRow][i] = num++;
      }
      topRow++;
  
      // Fill right column from top to bottom
      for (let i = topRow; i <= bottomRow; i++) {
        matrix[i][rightCol] = num++;
      }
      rightCol--;
  
      // Fill bottom row from right to left
      if (topRow <= bottomRow) {
        for (let i = rightCol; i >= leftCol; i--) {
          matrix[bottomRow][i] = num++;
        }
        bottomRow--;
      }
  
      // Fill left column from bottom to top
      if (leftCol <= rightCol) {
        for (let i = bottomRow; i >= topRow; i--) {
          matrix[i][leftCol] = num++;
        }
        leftCol++;
      }
    }
  
    // Print the matrix
    for (let i = 0; i < rows; i++) {
      console.log(matrix[i].join(' '));
    }
  }
  generateSpiralMatrix(5, 5)