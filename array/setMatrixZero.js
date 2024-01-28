const matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
let zeros = []; //store the zeros
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (matrix[i][j] == 0) zeros.push([i, j]);
  }
}

// fill with zeros
for (let i = 0; i < zeros.length; i++) {
  //for rows
  for (let j = 0; j < matrix[0].length; j++) {
    matrix[zeros[i][0]][j] = 0;
  }
  //for cols
  for (let j = 0; j < matrix.length; j++) {
    matrix[j][zeros[i][1]] = 0;
  }
}

console.log(matrix);
