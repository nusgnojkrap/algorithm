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
    var { data, width, height } = await pixels("./image/2_1.png");
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

    console.log(resultdata); //test

    let grayArray = [];
    for (let i = 0; i < width; i++) {
        grayArray[i] = [];
        for (let j = 0; j < height; j++) {
            grayArray[i][j] = color2Gray(resultdata[i][j][0], resultdata[i][j][1], resultdata[i][j][2]);
        }
    }

    let chunk = `P3 \n${width} ${height} \n255\n`;

    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            chunk += `${resultdata[i][j][0]} ${resultdata[i][j][1]} ${resultdata[i][j][2]} \n`;
        }
    }

    fs.writeFile("./image/2_1result.ppm", chunk, () => {
        console.log("finish");
    });

    // let image = new Jimp(width, height, function (err, image) {
    //     if (err) throw err;

    //     grayArray.forEach((row, y) => {
    //         row.forEach((color, x) => {
    //             image.setPixelColor(color, x, y);
    //         });
    //     });

    //     image.write("./image/sampleResult.png", (err) => {
    //         if (err) throw err;
    //     });
    // });
}

function color2Gray(r, g, b) {
    //   1.2 grey : newColor = 0.299×R + 0.587×G + 0.114×B
    let resultColor = Math.round(0.299 * r + 0.587 * g + 0.114 * b);
    //console.log("resultColor : " + resultColor);
    let resultData = "";
    resultColor = resultColor.toString(16);

    resultData = resultColor + resultColor + resultColor + "ff";

    // console.log("hex resultData : " + resultData);
    resultData = parseInt(resultData, 16);
    return resultData;
}

edgeDetected();
