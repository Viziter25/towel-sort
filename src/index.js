
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length <= 0) {
    return [];
}
  
  let arr = [];
  
  
  
  for (let i=0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      matrix[i].sort((a,b) => a - b);
    } else  {
      matrix[i].sort((a,b) => b - a);
    }
    arr.push(matrix[i]);
  }
  
  arr = arr.join(',').split(',');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = +arr[i];
  }
  return arr;
};

