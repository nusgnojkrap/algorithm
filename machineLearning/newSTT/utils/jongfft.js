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
    console.log("n : " + n);
    console.log("n( ) - signal(" + Number(n - signal_arr.length) + ") = " + Number(n - signal_arr.length));

    // for (let i = 0; i < Number(n - signal_arr.length); i++) {
    //     signal_arr[signal_arr.length + i] = 0;
    // }

    while (signal_arr.length != n) {
        for (let i = 0; i < Number(n - signal_arr.length); i++) {
            signal_arr[signal_arr.length + i] = 0;
        }
    }

    console.log(signal_arr.length);
    console.log("뭐야 슈ㅂ : " + Number(n - signal_arr.length));
    return fft(signal_arr, w);
}

let count = 0;
function fft(signal, w) {
    count++;
    console.log("-----------------");
    console.log("signal.length : " + signal.length); //65,536
    console.log("w : " + w);

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
    if (n == 4) {
        console.log("signal0 : " + signal[0]);
        console.log("signal1 : " + signal[1]);
        console.log("signal2 : " + signal[2]);
        console.log("signal3 : " + signal[3]);
    }
    if (n == 2) {
        console.log("signal0 : " + signal[0]);
        console.log("signal1 : " + signal[1]);
    }
    console.log("signal : " + signal[0]);
    if (n == 1) {
        if (signal[0] == undefined) {
            console.log("undefined : " + count);
        }
        console.log("-----------------");
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
    //error 부분
    //설명  : 해당 배열에 fft result 가 안들어감

    // console.log("even length : " + even.length);
    // console.log("odd length : " + odd.length);
    let fftData = [];
    let wp = 1;
    let j;

    try {
        for (j = 0; j < n / 2; j++) {
            //DFTn(A)[j] = DFTn/2(A0)[j] + w^j * DFTn/2(A1)[j]
            //DFTn(A)[j+n/2] = DFTn/2(A0)[j] - w^j * DFTn/2(A1)[j]

            //DFTn(A)[j] = DFTn/2(even)[j] + w^j * DFTn/2(odd)[j]
            //DFTn(A)[j + n/2] = DFTn/2(even)[j] - w^j * DFTn/2(odd[j])
            //math.evaluate(`e ^ (-2 * i * pi / ${channelData.length})`);
            try {
                fftData[j] = math.evaluate(`${neweven[j]} + ${wp} * ${newodd[j]}`);
                fftData[Math.floor(j + n / 2)] = math.evaluate(`${neweven[j]} - ${wp} * ${newodd[j]}`); //error
                // console.log("neweven[" + j + "] : " + neweven[j]);
            } catch (e) {
                // console.log("error : " + e);
            }

            //console.log(signal.length + "\t" + "\tfftData[" + j + "] : " + fftData[j] + "\t" + neweven[j] + "\t" + newodd[j]);
            // fftData[j] = even[j] + wp * odd[j];
            // fftData[j + n / 2] = even[j] - wp * odd[j];
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
    return fftData;
}

module.exports.jongfft = jongfft;
