// input  : signalData array
// output : fft data array

// const { flatten } = require("mathjs");
let math = require("mathjs");

function jongfft(signal, w) {
    //signal.length = 2^n

    let signal_arr = Object.entries(signal).map(([key, value]) => {
        return value;
    });
    let n = 1;
    while (signal_arr.length > n) {
        n = n * 2;
    }

    let idx = 0;
    while (idx < n) {
        signal_arr[idx] == undefined ? (signal_arr[idx] = 0) : "";
        idx++;
    }
    return fft(signal_arr, w);
}

function fft(signal, w) {
    if (signal.length == 1) {
        return signal;
    }

    let even = [];
    let odd = [];
    for (let k = 0; k < signal.length; k++) {
        if (k % 2) {
            //odd
            //1, 3
            //1
            odd.push(signal[k]);
        } else {
            //0, 2
            //0
            //even
            even.push(signal[k]);
        }
    }

    //error 부분
    let neweven = [];
    let newodd = [];

    neweven = fft(even, math.multiply(w, w)); //even 에 값이 안들어감
    newodd = fft(odd, math.multiply(w, w)); //odd 에 는 값이 들어감

    let fftData = [];
    let wp = 1;
    let j;

    for (j = 0; j < signal.length; j++) {
        fftData[j] = 0;
    }

    for (j = 0; j < signal.length / 2; j++) {
        fftData[j] = math.evaluate(`${neweven[j]} + ${wp} * ${newodd[j]}`);
        fftData[j + signal.length / 2] = math.evaluate(`${neweven[j]} - ${wp} * ${newodd[j]}`);
        wp = math.multiply(wp, w);
    }

    // let kk = j;
    // for (j; j < signal.length; j++) {
    //     fftData[j] = math.evaluate(`${neweven[kk]} - ${wp} * ${newodd[kk]}`);
    //     wp = math.evaluate(`${wp} * ${w}`);
    // }
    return fftData;
}

module.exports.jongfft = jongfft;
