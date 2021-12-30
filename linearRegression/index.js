//  input  : many (x, y) data
//  output : y = ax + b

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

function linearFunction(data) {
    let x = [];
    let y = [];
    console.log("data.length : " + data.length);
    for (let i = 0; i < data.length; i++) {
        x[i] = 0;
        y[i] = 0;
        for (let j = 0; j < data.length; j++) {
            if (i != j) {
                x[i] = x[i] + data[i][0];
                y[i] = y[i] + data[i][1];
            }
        }
        x[i] = x[i] / (data.length - 1);
        y[i] = y[i] / (data.length - 1);
    }

    for (let i = 0; i < data.length; i++) {
        console.log("x[" + i + "] : " + x[i]);
        console.log("y[" + i + "] : " + y[i]);
    }
    // console.log(p);

    //data.length; //b^2
}
linearFunction(data);
