const numRows = 10;

const number = []; // create n array of 1 to n len with 1 init
for (let i = 1; i <= numRows; i++) {
  number.push(Array(i).fill(1));
}

// in each array
for (let i = 0; i < numRows; i++) {
  if (number[i].length > 2) {
    // more than 2 elements
    for (let j = 0; j < number[i].length; j++) {
      // iterate through each eles
      if (j != 0 && j != number[i].length - 1) {
        // not first and last
        number[i][j] = number[i - 1][j - 1] + number[i - 1][j]; // add sum of prev array from its index and prev one
      }
    }
  }
}

console.table(number);
