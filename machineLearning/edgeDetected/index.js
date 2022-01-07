//  input  : image
//  output : edge detected

var pixels = require("image-pixels");
var fs = require("fs");
const Jimp = require("jimp");

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
    //resultdata : 1차원 데이터를 3차원 데이터로 width * height * 4(R, G, B, A)
    let edgeData = [];
    for (let i = 0; i < 511; i++) {
        edgeData[i] = [];
        for (let j = 0; j < 511; j++) {
            //data[i][j] = r g b a
            edgeData[i][j] = pointDistance(resultdata[i][j], resultdata[i][j + 1]);
        }
    }
    //edgeData : 자기 자신과 바로 오른쪽 점과의 공간좌표 RGB 에서의 거리
    edgeData = edgeDetectedArray(edgeData, 20);

    // console.log(edgeData);

    let image = new Jimp(512, 512, function (err, image) {
        if (err) throw err;

        edgeData.forEach((row, y) => {
            row.forEach((color, x) => {
                image.setPixelColor(color, x, y);
            });
        });

        image.write("./image/test.png", (err) => {
            if (err) throw err;
        });
    });
}

function pointDistance(a, b) {
    let x = (a[0] - b[0]) * (a[0] - b[0]);
    let y = (a[1] - b[1]) * (a[1] - b[1]);
    let z = (a[2] - b[2]) * (a[2] - b[2]);

    let result;
    result = Math.sqrt(x + y + z);
    return result;
}

function edgeDetectedArray(a, Benchmark) {
    //2
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[0].length; j++) {
            if (a[i][j] >= Benchmark) {
                //edge 라고 판단하면 빨간색
                a[i][j] = 0xff0000ff;
            } else {
                //edge 가 아니면 파란색
                a[i][j] = 0x0000ffff;
            }
        }
    }
    return a;
}

edgeDetected();
