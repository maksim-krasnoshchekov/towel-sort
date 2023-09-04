
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (matrix == undefined) {
    return [];
  };
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 != 0) {
      for (let g = matrix[i].length - 1; g >= 0; g--) {
        result.push(matrix[i][g]);
      }
    } else {
      for (let j = 0; j < matrix[i].length; j++) {
        result.push(matrix[i][j]);
      }
    }
  }
  return result;
}
