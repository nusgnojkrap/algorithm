//input : array
//output : Sum Array
//ouptut2 : Range Sum

let arr = [1, 3, 4, 8, 6, 1, 4, 2];

function SumArray(arr) {
    let sumArr = [];
    sumArr.push(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        sumArr[i] = sumArr[i - 1] + arr[i];
    }
    return sumArr;
}

console.log(SumArray(arr));

console.log(SumArray(arr)[6] - SumArray(arr)[2]);
