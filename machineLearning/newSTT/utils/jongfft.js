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

let count = 0;
function fft(signal, w) {
    // console.log("-----------------");
    // console.log("signal.length : " + signal.length); //65,536
    // console.log("w : " + w);

    //0

    if (typeof w.re != Number || typeof w.im != Number) {
        w.re = Number(w.re);
        w.im = Number(w.im);
    }
    w.re = w.re.toFixed(10);
    w.im = w.im.toFixed(10);
    w.re = Number(w.re);
    w.im = Number(w.im);

    let n = signal.length;
    if (n == 65536) {
        console.log("------------");
        count++;
        console.log(count);
        let und = 0;
        let num = 0;
        for (let a = 0; a < n; a++) {
            if (signal[a] == undefined) {
                und++;
            } else {
                num++;
            }
        }
    }

    if (n == 1) {
        return signal[0];
    }
    let even = [];
    let odd = [];
    for (let k = 0; k < n; k++) {
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
    neweven = fft(even, math.evaluate(`${w} * ${w}`));
    newodd = fft(odd, math.evaluate(`${w} * ${w}`));
    console.log("neweven.length : " + neweven.length);

    //error 부분
    //설명  : 해당 배열에 fft result 가 안들어감

    let fftData = [];
    let wp = 1;
    let j;

    try {
        for (j = 0; j < n / 2; j++) {
            try {
                fftData[j] = math.evaluate(`${neweven[j]} + ${wp} * ${newodd[j]}`);
                fftData[j + n / 2] = math.evaluate(`${neweven[j]} - ${wp} * ${newodd[j]}`); //error
                // console.log("neweven[" + j + "] : " + neweven[j]);
            } catch (e) {
                // console.log("error : " + e);
            }

            wp = math.evaluate(`${wp} * ${w}`);
        }
    } catch (e) {
        // console.log("count : " + count);
        // console.log("error : " + e);
        // console.log("j : " + j);
        // console.log(neweven[j]); //error
        // console.log(newodd[j]);
    }

    // if (signal.length >= 60000) {
    //     console.log("signal[10500] : " + signal[10500]);
    //     console.log("even[10500] : " + neweven[10500]);
    //     console.log("odd[10500] : " + odd[10500]);
    //     console.log("fftData[10500] : " + fftData[10500]);
    // }
    if (signal.length == 65536) {
        for (let ind = 0; ind < 65536; ind++) {
            console.log(`${ind}    : ${fftData[ind]}`);
        }
    }
    return fftData;
}

module.exports.jongfft = jongfft;
