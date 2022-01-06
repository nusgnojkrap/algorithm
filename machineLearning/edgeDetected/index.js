//  input  : image
//  output : edge detected

var pixels = require("image-pixels");
var fs = require("fs");
async function edgeDetected() {
    // load single source
    var { data, width, height } = await pixels("./image/Lenna.png");

    // load multiple sources in parallel
    // var [a, b, c] = await pixels.all(["./image/Lenna.png", { source: "./b.png", cache: false }]);
    // console.log(data);
    // console.log(width);
    // console.log(height);

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
    let edgeData = [];
    for (let i = 0; i < 511; i++) {
        edgeData[i] = [];
        for (let j = 0; j < 511; j++) {
            //data[i][j] = r g b a
            edgeData[i][j] = pointDistance(resultdata[i][j], resultdata[i][j + 1]);
        }
    }
    // console.log(edgeData);
    edgeData = edgeDetectedArray(edgeData);

    // console.log(edgeData);

    let aaa = [];
    count = 0;
    for (let i = 0; i < 511; i++) {
        for (let j = 0; j < 511; j++) {
            for (let k = 0; k < 3; k++) {
                if (edgeData[i][j] == 1) {
                    aaa.push(0); //검정색
                } else {
                    aaa.push(255); //흰색
                }
            }
            // aaa.push(edgeData[i][j]);
        }
    }
    saveImage("result.pcx", aaa);
    // console.log(resultdata);
}

function pointDistance(a, b) {
    let x = (a[0] - b[0]) * (a[0] - b[0]);
    let y = (a[1] - b[1]) * (a[1] - b[1]);
    let z = (a[2] - b[2]) * (a[2] - b[2]);

    let result;
    result = Math.sqrt(x + y + z);
    return result;
}

function edgeDetectedArray(a) {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[0].length; j++) {
            if (a[i][j] >= 10) {
                a[i][j] = 1;
            } else {
                a[i][j] = 0;
            }
        }
    }
    return a;
}

function saveImage(filename, data) {
    //var myBuffer = new Buffer(data.length);
    var myBuffer = new Buffer.alloc(data.length);
    for (var i = 0; i < data.length; i++) {
        myBuffer[i] = data[i];
    }
    fs.writeFile("./image/" + filename, myBuffer, function (err) {
        //fs.writeFile(ARTWORK_PATH + filename, myBuffer, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("The file was saved!");
        }
    });
}
// saveImage("image.jpg", [0, 43, 255, etc]);

edgeDetected();
