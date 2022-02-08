function powerSpectrum(absData) {
    let p = 0;
    for (let i = 0; i < absData.length; i++) {
        p += absData[i] * absData[i];
    }
    let result = p / absData.length;
    return result;
}

module.exports.powerSpectrum = powerSpectrum;
