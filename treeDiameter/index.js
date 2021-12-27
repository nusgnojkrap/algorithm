//  input  : array
//  output : length

let a = [];
a = [1, [2, 3, 4], [5, 6], 0, [7], 0, 0, 0];

let b = [];
b = [1, [2, 3], [4, 5], 0, [6], [7], [8], [9], [10], 0, 0];

let c = [];
c = [1, [2, 3], [4], [5], 0, 0];

function diameter(arr) {
    let distance;
    if (arr[0] == 0) {
        return 1;
    } else {
        let newarr = [];
        for (let i = 1; i < arr.length; i++) {
            newarr[i - 1] = arr[i];
        }
        if(1 + diameter(newarr) > ){
            distance = 1 + diameter(newarr);
        }

    }

    return distance;
}

console.log(diameter(c));
