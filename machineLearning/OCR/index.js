//  input  : sample image
//  output : text

//  1. pre-processing : grey -> 0 or 1 divide
//   1.1 color : 0xff0000ff
//   1.2 grey : newColor = 0.299×R + 0.587×G + 0.114×B
//  2. text detection
//  3. text recognition
//  4. post-processing

//  input  : image
//  output : edge detected

var pixels = require("image-pixels");
var fs = require("fs");
const Jimp = require("jimp");

async function edgeDetected() {
    // load single source
    var { data, width, height } = await pixels("./image/OCRsample.png");
    console.log(data.length);
    console.log("width : " + width);
    console.log("height : " + height);
    let resultdata = [];
    let count = 0;
    for (let i = 0; i < width; i++) {
        resultdata[i] = [];
        for (let j = 0; j < height; j++) {
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

    let grayArray = [];
    for (let i = 0; i < width; i++) {
        grayArray[i] = [];
        for (let j = 0; j < height; j++) {
            grayArray[i][j] = color2Gray(resultdata[i][j][0], resultdata[i][j][1], resultdata[i][j][2]);
        }
    }

    let image = new Jimp(width, height, function (err, image) {
        if (err) throw err;

        grayArray.forEach((row, y) => {
            row.forEach((color, x) => {
                image.setPixelColor(color, x, y);
            });
        });

        image.write("./image/sampleResult.png", (err) => {
            if (err) throw err;
        });
    });
}

function grayColor(r, g, b) {
    //   1.1 color : 0xff0000ff
    //   1.2 grey : newColor = 0.299×R + 0.587×G + 0.114×B
    let newR = Math.round(0.299 * r);
    let newG = Math.round(0.587 * g);
    let newB = Math.round(0.114 * b);

    let hexR = newR.toString(16);
    let hexG = newG.toString(16);
    let hexB = newB.toString(16);

    if (hexR.length == 1) {
        hexR = "0" + hexR;
    }
    if (hexG.length == 1) {
        hexG = "0" + hexG;
    }
    if (hexB.length == 1) {
        hexB = "0" + hexB;
    }
    let result = "";
    result = result + hexR;
    result = result + hexG;
    result = result + hexB;
    result = result + "ff";
    result = parseInt(result, 16);
    return result;
}

function color2Gray(r, g, b) {
    //   1.2 grey : newColor = 0.299×R + 0.587×G + 0.114×B
    let resultColor = Math.round(0.299 * r + 0.587 * g + 0.114 * b);
    let resultData = resultColor + resultColor + resultColor + "ff";
    resultData = parseInt(resultData, 16);
    return resultData;
}
edgeDetected();
