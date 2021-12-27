//  input  : arr, node
//  output : Max length

let a = [];
a = [
    [1, 3],
    [1, 4],
    [1, 2],
    [2, 5],
    [2, 6],
];

let b = [];
b = [
    [1, 3],
    [1, 4],
    [2, 5],
    [2, 6],
];

let Maxdistance = [];

function treeMaxLength(arr, node, distance) {
    if (distance == undefined) {
        distance = 0;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] == node) {
            let newnode = arr[i][1];
            let newarr = [];
            for (let j = 0; j < arr.length; j++) {
                if (arr[i] != arr[j]) {
                    newarr.push(arr[j]);
                }
            }
            treeMaxLength(newarr, newnode, distance + 1);
        } else if (arr[i][1] == node) {
            let newnode = arr[i][0];
            let newarr = [];
            for (let j = 0; j < arr.length; j++) {
                if (arr[i] != arr[j]) {
                    newarr.push(arr[j]);
                }
            }
            treeMaxLength(newarr, newnode, distance + 1);
        } else {
            //해당 node가 연결된 경로가 아닌 경우 패스
            Maxdistance.push(distance);
        }
    }
}

function maxDistance(arr, node) {
    treeMaxLength(arr, node);
    return Math.max.apply(null, Maxdistance);
}

console.log(maxDistance(a, 6));
