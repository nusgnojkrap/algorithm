//  input  : matrix
//  output : matrix
let a = [];
a = [
    [6, 13, 7, 4],
    [7, 0, 8, 2],
    [9, 5, 4, 18],
];

function transpose(matrix) {
    let resultMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (!Array.isArray(resultMatrix[j])) {
                resultMatrix[j] = [];
            }
            resultMatrix[j][i] = matrix[i][j];
        }
    }
    return resultMatrix;
}

console.log(transpose(a));
