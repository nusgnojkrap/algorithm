//input   : array[][]
//output  : Sumarray[]
//output2 : result sum

let a = [];

a[0] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
a[1] = [2, 1, 0, 1, 2, 3, 4, 5, 6];
a[2] = [3, 2, 1, 0, 1, 2, 3, 4, 5];
a[3] = [4, 3, 2, 1, 0, 1, 2, 3, 4];
a[4] = [5, 4, 3, 2, 1, 0, 1, 2, 3];
a[5] = [6, 5, 4, 3, 2, 1, 0, 1, 2];
a[6] = [7, 6, 5, 4, 3, 2, 1, 0, 1];
a[7] = [8, 7, 6, 5, 4, 3, 2, 1, 0];

function sum2DArr(arr, x, y) {
    let sum = 0;
    for (let i = 0; i < y; i++) {
        for (let j = 0; j < x; j++) {
            sum += arr[i][j];
        }
    }
    return sum;
}

sum2DArr(a, 3, 4); //(2, 3) 24

let A = sum2DArr(a, 7, 7);
let B = sum2DArr(a, 4, 7);
let C = sum2DArr(a, 7, 3);
let D = sum2DArr(a, 4, 3);
let result = A - B - C + D;
console.log("result : " + result);
