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
    let p = 0;
    let pp = 0;
    let pq = 0;
    let q = 0;
    for (let i = 0; i < data.length; i++) {
        p = p + data[i][0];
        pp = pp + data[i][0] * data[i][0];
        pq = pq + data[i][0] * data[i][1];
        q = q + data[i][1];
    }

    let b = (pq * p - q * pp) / (p * p - data.length * pp);
    let a = (data.length * pq - p * q) / (data.length * pp - p * p);
    console.log("a : " + a);
    console.log("b : " + b);
    console.log("f(x) = " + a + "x + " + b);
    return a, b;
}

linearFunction(data);
