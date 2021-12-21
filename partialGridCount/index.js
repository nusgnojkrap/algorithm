//  input : 행렬
//  output : 부분 격자 개수

// let arr = [];

// arr[0] = "11111111111111111111";
// arr[1] = "11111111111111111111";
// arr[2] = "11111111111111111111";
// arr[3] = "11111111111111111111";
// arr[4] = "11111111111111111111";
// arr[5] = "11111111111111111111";
// arr[6] = "11111111111111111111";
// arr[7] = "11111111111111111111";
// arr[8] = "11111111111111111111";
// arr[9] = "11111111111111111111";
// arr[10] = "11111111111111111111";
// arr[11] = "11111111111111111111";
// arr[12] = "11111111111111111111";
// arr[13] = "11111111111111111111";
// arr[14] = "11111111111111111111";
// arr[15] = "11111111111111111111";
// arr[16] = "11111111111111111111";
// arr[17] = "11111111111111111111";
// arr[18] = "11111111111111111111";
// arr[19] = "11111111111111111111";

function makearr(ccc) {
    let arr = [];
    for (let i = 0; i < ccc; i++) {
        arr[i] = [];
        for (let j = 0; j < ccc; j++) {
            arr[i].push(1);
        }
    }
    return arr;
}

function partialGridCount(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let k = 1; k < arr.length - i; k++) {
            if (parseInt(arr[i], 2) == (parseInt(arr[i], 2) & parseInt(arr[i + k], 2))) {
                let OneCount = 0;
                for (let j = 0; j < arr.length; j++) {
                    if (arr[i][j] == "1") {
                        OneCount = OneCount + 1;
                    }
                }
                count = count + (OneCount * (OneCount - 1)) / 2;
                //arr[i] 에서 1의 개수 찾기
            }
        }
    }
    console.log(count);

    console.log(new Date().getTime());
    return count;
}

let arraya = makearr(100);

console.log(new Date().getTime());
partialGridCount(arraya);
