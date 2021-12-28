//  input  : tree
//  output : arr

//          0   1             2   3   4         4  5  6  7  8
let tree = [1, [2, 3, 4, 5], [6], 0, [7, 8, 9], 0, 0, 0, 0, 0];
//[1.2.6.3.4.7.8.9.5]

let resultarr = [];
function treeTraversalArray(tree, node) {
    if (node == undefined) {
        node = 0;
    }

    if (tree[node] == 0) {
        //leaf
        resultarr.push(node);
    } else if (tree[node] == 1) {
        //root
        treeTraversalArray(tree, node + 1);
    } else {
        resultarr.push(node);
        for (let i = 0; i < tree[node].length; i++) {
            treeTraversalArray(tree, tree[node][i]);
        }
    }
}

treeTraversalArray(tree);

console.log(resultarr);
