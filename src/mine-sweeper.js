const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let minefield = matrix.map(row=>row.map(el=>el = 0));

  matrix.forEach((row, y)=>row.forEach((item, x)=>{
    if (item) increment(x,y)
  }))

  function increment(x,y) {
    minefield.forEach((row, j, arr) => row.forEach((item, i) => {
      if (i === x && j === y) return;
      if((i === x ||  i === x-1 ||  i === x+1) && (j === y ||  j === y-1 ||  j === y+1)) arr[i][j]++;
    }))
  }
  return minefield;
}

module.exports = {
  minesweeper
};
