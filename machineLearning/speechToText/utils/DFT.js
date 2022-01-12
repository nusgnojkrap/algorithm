//  Cooley-Tukey algorithm

let testaudio = "./../audio/goodday.wav";

let mathjs = require("mathjs");

var wavTobinary = require("./wavTobinary");

async function DFT() {
    let channelData = await wavTobinary(testaudio);
    //console.log(channelData);

    let count = 0;
    for (let i = 0; i < channelData.length - 2; i++) {
        if (channelData[i] > channelData[i + 1]) {
            //f'(x) > 0
            if (channelData[i + 1] <= channelData[i + 2]) {
                //f'(x) <= 0
                count = count + 1;
            }
        } else if (channelData[i] < channelData[i + 1]) {
            //f'(x) < 0
            if (channelData[i + 1] >= channelData[i + 2]) {
                //f'(x)
                count = count + 1;
            }
        } else if ((channelData[i] = channelData[i + 1])) {
            if (channelData[i + 1] > channelData[i + 2] || channelData[i + 1] < channelData[i + 2]) {
                count = count + 1;
            }
        }
    }

    console.log("count : " + count);
    let pp = mathjs.e ** (-2 * mathjs.pi * mathjs.sqrt(-1));
    console.log(mathjs.e);
    console.log(mathjs.pi);
    console.log(mathjs.sqrt(-1));
    console.log(mathjs.pi * mathjs.sqrt(-1));
    console.log(pp);

    count = 8192; // test 8192 = 2^13
    let f = [];
    for (let j = 0; j < count; j++) {
        f[j] = 0;
        for (let k = 0; k < count; k++) {
            f[j] = (f[j] + channelData[j] * mathjs.e) ** (-2 * mathjs.pi * mathjs.sqrt(-1) * j * k);
        }
    }
    for (let i = 0; i < f.length; i++) {
        if (f[i] != 0) {
            console.log(i + " : " + f[i]);
        }
    }
    //data : n차 다항함수 ( n = count)
}
DFT();
