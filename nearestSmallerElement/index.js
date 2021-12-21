//  input : arr
//  output : arr

let ExamArr = [1, 3, 4, 2, 5, 3, 4, 2];
//  near    = [1, , , , , , , , , , ,];
function nearSmallerElement(arr) {
    let near = [];

    near.push(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        //if ( near )

        if (near[near.length - 1] >= arr[i]) {
            //pop 하고 push
            for (let j = near.length - 1; j > 0; j--) {
                if (near[near.length - 1] >= arr[i]) {
                    near.pop();
                }
            }
            near.push(arr[i]);
        } else {
            //near < arr
            near.push(arr[i]);
        }
        console.log("------------------");
        console.log("near : " + near);
    }
    console.log("result near : " + near);
    return near;
}

nearSmallerElement(ExamArr);
