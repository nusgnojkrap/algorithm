//  input  : arr, node, distance
//  output : node

let a = [];
a = [1, [2, 4, 5], [6], 0, [3, 7], 0, 0, [8], 0];

function findAncestor(arr, node, distance) {
    if (distance == 0) {
        return node;
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                if (arr[i].includes(node)) {
                    //arr 에서 node 와 같은 값을 찾으면 해당 자리를 node로 새로 넣어준다.
                    // console.log("node : " + i);
                    return findAncestor(arr, i, distance - 1);
                }
            }
        }
    }
}
console.log(findAncestor(a, 8, 3));
