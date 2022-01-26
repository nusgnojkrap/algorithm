// input  : signalData array
// output : fft data array
let math = require("mathjs");

function fft(signal, w) {
    let n = signal.length;
    if (n == 1) {
        return;
    }
    if (even == undefined) {
        var even = [];
    }
    if (odd == undefined) {
        var odd = [];
    }
    for (let k = 0; k < n; k++) {
        if (k % 2) {
            odd[(k - 1) / 2] = signal[k];
        } else {
            even[k / 2] = signal[k];
        }
    }
    fft(even, w * w);
    fft(odd, w * w);

    let wp = 1;
    let fftData = [];
    for (let i = 0; i < n / 2; i++) {
        // f(x) = f_even(x^2) + x * f_odd(x^2)
        fftData[i] = even[i] + wp * odd[i];
        // f(-x) = f_even(x^2) - x * f_odd(x^2)
        fftData[i + n / 2] = even[i] - wp * odd[i];
        wp = wp * w;
    }
    return fftData;
}

module.exports.fft = fft;
