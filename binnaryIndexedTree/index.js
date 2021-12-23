//  input  : arr
//  output : binary indexed tree
//  tree rule
//  input [0, 1, 3, 4, 8, 6, 1, 4, 2]
// output [0, 1, 4, 4, 16, 6, 7, 4, 29]

let a = [];
a = [1, 3, 4, 8, 6, 1, 4, 2];

function binaryIndexedTree(arr) {
    let newarr = [];
    newarr.push(0);
    for (let i = 0; i < arr.length; i++) {
        newarr.push(arr[i]);
    }

    let binarytree = [];
    binarytree.push(0);

    for (let i = 1; i < arr.length + 1; i++) {
        let sumLength = i & -i;
        let sum = 0;
        for (let j = i - sumLength + 1; j <= i; j++) {
            sum = sum + newarr[j];
        }
        binarytree.push(sum);
    }

    return binarytree;
}

console.log(binaryIndexedTree(a));
