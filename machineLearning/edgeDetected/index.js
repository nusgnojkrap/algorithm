//  input  : image
//  output : edge detected

var pixels = require("image-pixels");

async function edgeDetected() {
    // load single source
    var { data, width, height } = await pixels("./image/Lenna.png");

    // load multiple sources in parallel
    // var [a, b, c] = await pixels.all(["./image/Lenna.png", { source: "./b.png", cache: false }]);
    console.log(data);
    console.log(width);
    console.log(height);

    let resultdata = [];
    let count = 0;
    for (let i = 0; i < 512; i++) {
        resultdata[i] = [];
        for (let j = 0; j < 512; j++) {
            resultdata[i][j] = [];
            for (let k = 0; k < 4; k++) {
                if (k != 3) {
                    resultdata[i][j].push(data[count++]);
                } else {
                    count++;
                }
            }
        }
    }

    for (let i = 0; i < 512; i++) {
        for (let j = 0; j < 512; j++) {
            pointDistance();
        }
    }

    console.log(resultdata);
}

function pointDistance(a, b) {
    let x = 0;
    let y = 0;
    let z = 0;
    x = (a[0] - b[0]) * (a[0] - b[0]);
    y = (a[1] - b[1]) * (a[1] - b[1]);
    z = (a[2] - b[2]) * (a[2] - b[2]);
    let result;
    result = Math.sqrt(x + y + z);
    return result;
}
edgeDetected();
