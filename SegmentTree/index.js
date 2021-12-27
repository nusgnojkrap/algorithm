//  input  : arr
//  output : arr

let a = [];
a = [5, 8, 6, 3, 2, 7, 2, 6];

function SegmentTree(arr) {
    if (Math.log2(arr.length) % 1 != 0) {
        console.log("error input arr length : " + arr.length);
        return 0;
    }
    let segment = [];
    segment[0] = arr;
    let k = arr.length;
    for (let i = 1; i <= Math.log2(arr.length); i++) {
        segment[i] = [];
        for (let j = 0; j < k; ) {
            let sum = segment[i - 1][j] + segment[i - 1][j + 1];
            segment[i].push(sum);
            j = j + 2;
        }
        k = k / 2;
    }
    let result = [];
    let x = 1;
    for (let i = Math.log2(arr.length); i >= 0; i--) {
        for (let j = 0; j < x; j++) {
            result.push(segment[i][j]);
        }
        x = x * 2;
    }
    return result;
}

// input  : arr, a, b
// output : sum
function sumSegmentTree(arr, p, q) {
    let sumarr = SegmentTree(arr);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {}
}

sumSegmentTree(a, 1, 6);
