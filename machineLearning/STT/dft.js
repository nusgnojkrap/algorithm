//  Cooley-Tukey algorithm

let testaudio = "./audio/gooddaywav.wav";

let math = require("mathjs");

var wavTobinary = require("./utils/wavTobinary");
let fs = require("fs");
async function DFT() {
    let channelData = await wavTobinary(testaudio);

    let resultData = [];
    let file = fs.createWriteStream("./result/result.txt");

    // for (let k = 0; k < channelData.length; k++) {
    //     resultData[k] = 0;
    //     for (let n = 0; n < channelData.length; n++) {
    //         resultData[k] = math.evaluate(`${resultData[k]} + ${channelData[k]} * e^((-2 * i * pi * ${k} * ${n}) / ${channelData.length})`);
    //     }
    //     file.write(resultData[k] + "\n");
    // }

    for (let k = 10000; k < 10500; k++) {
        resultData[k] = 0;
        for (let n = 10000; n < 10500; n++) {
            resultData[k] = math.evaluate(`${resultData[k]} + ${channelData[k]} * e^((-2 * i * pi * ${k} * ${n}) / ${500})`);
        }
        file.write(resultData[k] + "\n");
    }

    file.end();

    console.log("end");
}
DFT();
