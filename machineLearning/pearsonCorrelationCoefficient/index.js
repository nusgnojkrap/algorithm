//  input  : data
//  output : pearsonCorrelationCoefficient
let data = [
    [1, 2],
    [5, 6],
    [2, 4],
    [4, 4],
    [3, 3],
    [7, 9],
    [1, 9],
    [9, 2],
    [8, 7],
    [3, 6],
    [9, 9],
    [11, 10],
    [12, 6],
    [6, 6],
    [8, 6],
    [13, 11],
    [14, 10],
    [18, 23],
    [17, 22],
    [15, 21],
    [13, 12],
];

let pointA = [-1, 40];
function pearsonCorrelationCoefficient(data, p) {
    let cor = 0;
    let SDX = 0;
    let SDY = 0;
    for (let i = 0; i < data.length; i++) {
        cor = cor + (data[i][0] - p[0]) * (data[i][1] - p[1]);
        SDX = SDX + (data[i][0] - p[0]) * (data[i][0] - p[0]);
        SDY = SDY + (data[i][1] - p[1]) * (data[i][1] - p[1]);
    }
    let result = cor / (Math.sqrt(SDX) * Math.sqrt(SDY));
    return result;
}

console.log(pearsonCorrelationCoefficient(data, pointA));
