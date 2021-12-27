// input  : arr, a, b
// output : minValue

let arrrr = [];
arrrr = [1, 3, 4, 8, 6, 99, 4, 3, 5, 6, 6, 78, 7, 6, 42, 7, 312, 31, 34, 5, 25, 23, 423, 4, 1, 4, 6];

function RangeMinimunFind(arr, a, b, k) {
    let range = b - a + 1;

    if (k > 1) {
        k = k - 1;
    } else if (k == undefined) {
        k = 1;
        for (let i = 0; i < range.toString(2).length - 1; i++) {
            k = k * 2;
        }
    }

    if (k < 2) {
        return Math.min(arr[a], arr[b]);
    } else {
        return Math.min(RangeMinimunFind(arr, a, a + k - 1, k), RangeMinimunFind(arr, b - k + 1, b, k));
    }
}

console.log(RangeMinimunFind(arrrr, 1, 10));
