let testaudio = "./audio/gooddaywav.wav";

let math = require("mathjs");
let fs = require("fs");
const { sqrt, atan2, im, complexDependencies, multiply, abs } = require("mathjs");

var wavTobinary = require("./utils/wavTobinary");
let { preemphasis } = require("./utils/preemphasis");
let { framing } = require("./utils/framing");
let { windowing } = require("./utils/windowing");
const { jongfft } = require("./utils/jongfft");
const { type } = require("os");
const { signalDetection } = require("./utils/signalDetection");
const { amplitude } = require("./utils/amplitude");
const { fre2Mel, mel2Fre, melScaleFilter } = require("./utils/filterbanks");
const { powerSpectrum } = require("./utils/powerSpectrum");

async function newSTT() {
    let channelData = await wavTobinary(testaudio);
    console.log("Sampling success");
    console.log("length : " + channelData.length);

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
    for (let i = 0; i < framingData.length; i++) {
        windowingData[i] = [];
        windowingData[i] = windowing(framingData[i]);
    }
    console.log("Windowing success");

    //step 4. Fourer Transform : fft
    let fftData = [];
    let w = math.evaluate(`e ^ ((-2 * i * pi) / ${channelData.length})`);
    for (let i = 0; i < windowingData.length; i++) {
        fftData[i] = [];
        fftData[i] = jongfft(windowingData[i], w);
    }
    console.log("Fourer Transform success");

    //step 5. Magnitude
    let absData = [];
    for (let i = 0; i < fftData.length; i++) {
        absData[i] = [];
        for (let j = 0; j < fftData[i].length; j++) {
            if (fftData[i][j].im == undefined) {
                absData[i][j] = fftData[i][j];
            } else {
                absData[i][j] = amplitude(Number(fftData[i][j].re), Number(fftData[i][j].im));
            }
        }
    }

    //step 6. Power Spectrum
    let powerSpectrumArray = [];
    for (let i = 0; i < absData.length; i++) {
        powerSpectrumArray[i] = powerSpectrum(absData[i]);
    }
    console.log(fftData[2727]);
    console.log(absData[2727]);
    console.log(powerSpectrumArray[2727]);
    return;
    for (let i = 0; i < powerSpectrumArray.length; i++) {
        if (powerSpectrumArray[i] != powerSpectrumArray[0]) {
            console.log(i + "  :  " + powerSpectrumArray[i]);
        }
    }
    return;

    //step 7. Filter Banks

    for (let i = 0; i < fftData.length; i++) {}
    //step 8. Log-Mel Spectrum

    //step 9. MFCCs

    //step 10. Post Processing
}

newSTT();
