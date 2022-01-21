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

        let [a, b] = complexSplit(resultData[k]);
        file.write(a + "\t" + b + "\n");
    }

    // file.end(() => {
    //     for (let i = 0; i < resultData.length; i++) {
    //         let [a, b] = complexSplit(resultData[i]);
    //         // console.log(a, b);
    //     }
    // });

    console.log("end");
}

function complexSplit(input) {
    let real = input.re.toString();

    if (real.includes("e")) {
        real = Number(real.split("e")[0]) * 2.72 + Number(real.split("e")[1]);
    } else {
        real = Number(real);
    }

    let im = input.im.toString();

    if (im.includes("e")) {
        im = Number(im.split("e")[0]) * 2.72 + Number(im.split("e")[1]);
    } else {
        im = Number(im);
    }

    console.log(im);

    return [real, im];

    // console.log(input.re + " " + input.im);
}

DFT();
