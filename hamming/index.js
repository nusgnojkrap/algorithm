//  input : 10진수 2개
//  output : 2진수 다른 갯수

function hamming(a, b) {
    result = a ^ b;
    result = result.toString(2);
    console.log(result);

    let k = 0;
    for (let i = 0; i < result.length; i++) {
        if (result[i] == "1") {
            k = k + 1;
        }
    }
    console.log("개수 : " + k);
    return result;
}

hamming(7, 13);
