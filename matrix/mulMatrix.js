//  input  : matrix * matrix
//  output : matrix
//  198p
// let a = [];
// a = [
//     [1, 4],
//     [3, 9],
//     [8, 6],
// ];

// let b = [];
// b = [
//     [1, 6],
//     [2, 9],
// ];

let a = [];
a = [[1], [2], [3]];

let b = [];
b = [[1, 2]];

function multiply(a, b) {
    if (a[0].length != b.length) {
        console.log("error");
        return;
    }
    let resultMatrix = [];
    for (let i = 0; i < a.length; i++) {
        if (!Array.isArray(resultMatrix[i])) {
            resultMatrix[i] = [];
        }
        for (let j = 0; j < b[0].length; j++) {
            resultMatrix[i][j] = 0;
            for (let p = 0; p < a[0].length; p++) {
                resultMatrix[i][j] += a[i][p] * b[p][j];
            }
        }
    }
    return resultMatrix;
}

console.log(multiply(a, b));
