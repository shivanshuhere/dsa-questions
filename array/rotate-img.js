const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// transpose
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < i; j++) {
    // swap row with col
    let tmp = matrix[i][j];
    matrix[i][j] = matrix[j][i];
    matrix[j][i] = tmp;
  }
}
// reverse
matrix.forEach((ele) => {
  ele.reverse();
});

// // brute force
// const copy = structuredClone(matrix) // copy
// for (let i = 0; i < matrix.length; i++) {
// for (let j = 0; j < matrix[0].length; j++) {
//     matrix[j][matrix[0].length -i -1] = copy[i][j] // change the positon acc.
// }
// }
