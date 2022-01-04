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
                resultdata[i][j].push(data[count++]);
            }
        }
    }
    console.log(resultdata);
}
