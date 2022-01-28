let testaudio = "./audio/gooddaywav.wav";

let math = require("mathjs");
let fs = require("fs");
const { sqrt, atan2, im, complexDependencies } = require("mathjs");

var wavTobinary = require("./utils/wavTobinary");
let { preemphasis } = require("./utils/preemphasis");
let { framing } = require("./utils/framing");
let { windowing } = require("./utils/windowing");
let { fft } = require("./utils/fft");
const { jongfft } = require("./utils/jongfft");
const { type } = require("os");

async function STT() {
    let channelData = await wavTobinary(testaudio);
    console.log("Sampling success");
    //step 1. Preemhasis
    let preemhasisData = [];
    for (let a = 0; a < channelData.length - 1; a++) {
        preemhasisData[a] = preemphasis(channelData[a], channelData[a + 1]);
    }
    console.log("Preemhasis success");

    //step 2. Framing
    let framingData = [];
    framingData = framing(preemhasisData, 25, 10);
    console.log("Framing success");

    //step 3. Windowing
    let windowingData = [];
    windowingData = windowing(25);
    console.log("Windowing success");

    //step 4. Fourer Transform : fft
    let fftData = [];
    let w;
    w = math.evaluate(`e ^ (-2 * i * pi / ${channelData.length})`);
    //resultData[k] = math.evaluate(`${resultData[k]} + ${channelData[k]} * e^((-2 * i * pi * ${k} * ${n}) / ${500})`);
    // fftData = fft(channelData, w);
    console.log("channelData.length : " + channelData.length);
    fftData = jongfft(channelData, w);
    console.log("Fourer Transform success");
    // for (let i = 0; i < fftData.length; i++) {
    //     if (fftData[i] != 0 && fftData[i] != undefined && fftData[i] != NaN) {
    //         console.log(fftData[i]);
    //     }
    // }

    console.log("channelData : " + channelData[10500]);
    console.log("fftData : " + fftData[10500]);

    console.log("channel.length : " + channelData.length);
    console.log("fftData.length : " + fftData.length);

    //step 5. Magnitude

    //step 6. Power Spectrum

    //step 7. Filter Banks

    //step 8. Log-Mel Spectrum

    //step 9. MFCCs

    //step 10. Post Processing
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

    return [real, im];

    // console.log(input.re + " " + input.im);
}

function amplitude(real, imaginary) {
    let real2 = real * real;
    let imaginary2 = imaginary * imaginary;
    return sqrt(real2 + imaginary2);
}

function phase(real, imaginary) {
    return atan2(real, imaginary);
}

function signalDetection(signalData) {
    let sum = 0;
    for (let i = 0; i < signalData.length; i++) {
        sum = sum + sqrt(signalData[i] * signalData[i]);
    }
    let average;
    average = sum / signalData.length;
    console.log("average : " + average);
    let outputData = [];
    let k = 0;
    for (let i = 0; i < signalData.length; i++) {
        if (average < signalData[i]) {
            if (signalData[i - 1] < signalData[i] && signalData[i] < signalData[i + 1]) outputData.push(i);
        }
    }
    return outputData;
}

STT();
